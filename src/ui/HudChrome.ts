export interface HudChromeFacts {
  mode: 'adventure' | 'oneblock';
  creative: boolean;
  flying: boolean;
  fighting: boolean;
  tutorialDone: boolean;
  /** Peaceful play uses the picture cards instead of a key list. */
  peaceful?: boolean;
  /** Seconds played in this world. */
  elapsed: number;
  /** Phone or tablet: skip mouse and keyboard reminders. */
  coarse?: boolean;
  /** OneBlock phase and the next unlock, e.g. "Floresta · Ruína: 12/80". */
  oneBlockMark: string;
}

export interface HudChrome {
  phase: string;
  playHelp: string;
  flight: string;
}

/** Survival and OneBlock keep the key reminder only for the first minute and a half. */
export const PLAY_HELP_SECONDS = 90;

/** Corner text besides the objective and the hint; empty strings stay invisible. */
export function hudChrome(facts: HudChromeFacts): HudChrome {
  const phase = facts.mode === 'oneblock' ? facts.oneBlockMark : '';
  let flight = !facts.creative || facts.fighting ? '' : facts.flying ? '✈ Shift desce · F pousa' : '✈ F: voar';
  const learning = facts.creative ? !facts.tutorialDone : facts.elapsed < PLAY_HELP_SECONDS;
  let playHelp = '';
  if (facts.fighting) playHelp = 'Espaço: pular · Esc: pausar';
  else if (facts.peaceful) playHelp = '';
  else if (learning) playHelp = facts.creative ? 'B: blocos · Z: desfazer · Esc: menu' : 'B: mochila · C: criar · H: ajuda · Esc: menu';
  if (facts.coarse) {
    playHelp = '';
    flight = facts.creative && !facts.fighting && facts.flying ? '✈ Voando' : '';
  }
  return { phase, playHelp, flight };
}
