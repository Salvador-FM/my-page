import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-background-wave',
  imports: [],
  templateUrl: './background-wave.html',
  styleUrl: './background-wave.css',
})

export class BackgroundWave {

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const rows = 80;
    const cols = 120;
    const spacing = 24;
    const perspective = 0.00025;
    const waveHeight = 28;
    let time = 0;

    const bg = getComputedStyle(document.documentElement)
      .getPropertyValue('--bg-color');

    const color = getComputedStyle(document.documentElement)
      .getPropertyValue('--neon-green');

    const horizon = canvas.height * 0.55; // hasta donde llegan las olas

    const animate = () => {
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let z = 0; z < rows; z++) {
        const depth = z * spacing;
        const scale = 1 / (1 + depth * perspective);

        for (let x = -cols / 2; x < cols / 2; x++) {
          const wave =
            Math.sin((x * 0.5 + time) * 0.08 + z * 0.25) * waveHeight;

          const px = canvas.width / 2 + x * spacing * scale;
          const py = canvas.height - depth * scale - wave * scale;

          // ⬇ Fade vertical (desaparición suave)
          const fade =
            (py - horizon) / (canvas.height - horizon);

          if (fade <= 0) continue;

          ctx.globalAlpha = Math.min(fade, 1);

          ctx.beginPath();
          ctx.arc(px, py, 1.1 * scale, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      time += 0.2;
      requestAnimationFrame(animate);
    };

    animate();
  }

}
