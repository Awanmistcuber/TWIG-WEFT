import { Injectable, input, signal } from '@angular/core';
import { environment } from '../../../env';
import { GoogleGenerativeAI, GenerativeModel} from '@google/generative-ai';
import { Message, SendMessageEvent, User } from '@progress/kendo-angular-conversational-ui';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
    #generativeAI = new GoogleGenerativeAI(environment.geminy_key);

    #prompt =
      'You are an expert in the Kendo UI library for Angular, provide a real-world scenario and how this product ' +
      'helps to solve, with angular code examples and links for resources';
  
    #model = this.#generativeAI.getGenerativeModel({
      model: 'gemini-pro',
    });
    async generate(textInput: SendMessageEvent) {
        try {
          if (textInput.message.text && this.#model) {
            this.$messages.update((p) => [...p, textInput.message]);
            const parts = [
              {
                text: this.#prompt,
              },
              { text: textInput.message.text },
            ];
    
            const result = await this.#model.generateContent({
              contents: [{ role: 'user', parts }],
            });
    
            const response = result.response;
            const text = response.text();
    
            const message = {
              author: this.#kendoIA,
              timestamp: new Date(),
              text,
            };
    
            this.$messages.update((p) => [...p, message]);
          }
        } catch (e: any) {
          console.log(e);
        }
      }
    



    readonly #kendoIA: User = {
        id: crypto.randomUUID(),
        name: 'Kendo UI',
        avatarUrl: './assets/kendo.png',
      };
    
    public readonly user: User = {
        id: crypto.randomUUID(),
        name: 'Dany',
        avatarUrl: './assets/dany.jpg',
      };
    
      $messages = signal<Message[]>([{
        author: this.#kendoIA,
        timestamp: new Date(),
        text: 'Hi! 👋 how I can help you with Kendo ?'
}]);



      

}