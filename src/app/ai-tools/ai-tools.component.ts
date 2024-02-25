import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import {ChatModule, SendMessageEvent} from '@progress/kendo-angular-conversational-ui'
@Component({
  selector: 'app-ai-tools',
  standalone: true,
  imports: [CommonModule,ChatModule],
  templateUrl: './ai-tools.component.html',
  styleUrl: './ai-tools.component.css'
})
export class AiToolsComponent {
  infoText: string = '';

  launchColorDetection() {
    // Add logic to launch color detection
    console.log('Launching Color Detection');
  }

  launchGeminiChat() {
    // Add logic to launch Gemini chat
    console.log('Launching Gemini Chat');
  }

  launchMeasurementTool() {
    // Add logic to launch measurement tool
    console.log('Launching Measurement Tool');
  }

  launchArtGenerator() {
    // Add logic to launch art generator
    console.log('Launching Art Generator');
  }

  showInfo(text: string) {
    this.infoText = text;
  }

  hideInfo() {
    this.infoText = '';
  }
}
