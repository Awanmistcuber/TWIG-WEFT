import { Component, ElementRef, ViewChild,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-creator-mode',
  standalone: true,
  imports: [],
  templateUrl: './creator-mode.component.html',
  styleUrl: './creator-mode.component.css'
})
export class CreatorModeComponent {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private painting: boolean = false;
  private tool: string = 'brush';
  private zoomLevel: number = 1;

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
  }

  startPainting(event: MouseEvent): void {
    this.painting = true;
    this.paint(event);
  }

  stopPainting(): void {
    this.painting = false;
    this.ctx.beginPath();
  }

  paint(event: MouseEvent): void {
    if (!this.painting) return;

    const x = event.clientX - this.canvasRef.nativeElement.offsetLeft;
    const y = event.clientY - this.canvasRef.nativeElement.offsetTop;

    if (this.tool === 'brush') {
      this.ctx.lineWidth = 5;
      this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = '#000';
    } else if (this.tool === 'eraser') {
      this.ctx.lineWidth = 10;
      this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = '#fff';
    }

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  setTool(tool: string): void {
    this.tool = tool;
  }

  zoomIn(): void {
    this.zoomLevel += 0.1;
    this.applyZoom();
  }

  zoomOut(): void {
    this.zoomLevel -= 0.1;
    this.applyZoom();
  }

  zoom(event: WheelEvent): void {
    if (event.deltaY > 0) {
      this.zoomOut();
    } else {
      this.zoomIn();
    }
  }

  applyZoom(): void {
    this.ctx.setTransform(this.zoomLevel, 0, 0, this.zoomLevel, 0, 0);
  }
}