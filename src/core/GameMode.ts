export type GameMode = 'adventure' | 'oneblock';
export const modeName = (mode: GameMode): string => mode === 'adventure' ? 'Mundo' : 'Ilha';
