/** Quiet sky, then a short shower, then a rainbow. */
export const CLEAR_SECONDS = 46;
export const RAIN_SECONDS = 18;
export const RAINBOW_SECONDS = 16;
/** How often nearby carrots advance one stage. */
export const CARROT_GROW_SECONDS = 7;
/** Rain makes the same carrots grow sooner. */
export const RAIN_CARROT_GROW_SECONDS = 3;

export type SkyMood = 'clear' | 'rain' | 'rainbow';

export class SkyCycle {
  mood: SkyMood = 'clear';
  private elapsed = 0;

  step(dt: number): SkyMood {
    this.elapsed += dt;
    const span = this.mood === 'clear' ? CLEAR_SECONDS : this.mood === 'rain' ? RAIN_SECONDS : RAINBOW_SECONDS;
    if (this.elapsed >= span) {
      this.elapsed = 0;
      this.mood = this.mood === 'clear' ? 'rain' : this.mood === 'rain' ? 'rainbow' : 'clear';
    }
    return this.mood;
  }

  get raining(): boolean {
    return this.mood === 'rain';
  }

  carrotEvery(): number {
    return this.raining ? RAIN_CARROT_GROW_SECONDS : CARROT_GROW_SECONDS;
  }
}
