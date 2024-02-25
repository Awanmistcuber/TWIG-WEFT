import { Component, ElementRef,ViewChild} from '@angular/core';
import{MatIcon} from '@angular/material/icon'
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {fabric} from 'fabric';
@Component({
  selector: 'app-ref-hub',
  standalone: true,
  imports: [MatIcon,NgFor,HttpClientModule],
  templateUrl: './ref-hub.component.html',
  styleUrl: './ref-hub.component.css'
})
export class RefHubComponent {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private canvas: any;
  
  public uploadedImages: { file: File, url: string }[] = [];
  public draggedImage: { file: File, url: string } | null = null;

  constructor() {}
  onFileChange(event: any): void {
    const files: FileList = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      this.uploadedImages.push({ file, url });
    }
  }

  onImageDragStart(image: { file: File, url: string }): void {
    this.draggedImage = image;
  }

  onCanvasDrop(event: DragEvent): void {
    event.preventDefault();

    if (this.draggedImage) {
      const canvas = this.canvas;

      if (canvas) {
        const ctx = canvas.getContext('2d');

        if (ctx) {
          const img = new Image();
          img.src = this.draggedImage.url;

          img.onload = () => {
            ctx.drawImage(img, event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop, 100, 100);
          };

          this.draggedImage = null;
        } else {
          console.error('getContext returned null');
        }
      } else {
        console.error('canvas is not defined');
      }
    }
  }

  onCanvasDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    console.log(this.canvas);
  }
  
  
}


