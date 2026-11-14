import { Block } from '../world/blocks.ts';

export interface PaintColor {
  block: Block;
  name: string;
  /** Big button color, close to the block texture. */
  hex: string;
}

/** Large, named colors for pixel art. Building with these blocks still works. */
export const PAINT_COLORS: readonly PaintColor[] = [
  { block: Block.White, name: 'Branco', hex: '#e2e4de' },
  { block: Block.Cream, name: 'Creme', hex: '#ffecb8' },
  { block: Block.Yellow, name: 'Amarelo', hex: '#e9cd43' },
  { block: Block.Orange, name: 'Laranja', hex: '#e18534' },
  { block: Block.Peach, name: 'Pêssego', hex: '#ffba94' },
  { block: Block.Coral, name: 'Coral', hex: '#ff7060' },
  { block: Block.Red, name: 'Vermelho', hex: '#c3413c' },
  { block: Block.Pink, name: 'Rosa', hex: '#e591b7' },
  { block: Block.Magenta, name: 'Rosa forte', hex: '#d648a8' },
  { block: Block.Purple, name: 'Roxo', hex: '#8c58bb' },
  { block: Block.Lavender, name: 'Lilás', hex: '#baa0f0' },
  { block: Block.Blue, name: 'Azul', hex: '#447dcf' },
  { block: Block.LightBlue, name: 'Azul claro', hex: '#7ec4f0' },
  { block: Block.Navy, name: 'Azul escuro', hex: '#24408c' },
  { block: Block.Cyan, name: 'Azul piscina', hex: '#40d2d6' },
  { block: Block.Teal, name: 'Verde água', hex: '#209684' },
  { block: Block.Mint, name: 'Menta', hex: '#a8f0c4' },
  { block: Block.Lime, name: 'Verde limão', hex: '#9ad648' },
  { block: Block.Green, name: 'Verde', hex: '#529c63' },
  { block: Block.Brown, name: 'Marrom', hex: '#8c5630' },
  { block: Block.Chocolate, name: 'Chocolate', hex: '#5c3420' },
  { block: Block.Gray, name: 'Cinza', hex: '#94969c' },
  { block: Block.Black, name: 'Preto', hex: '#26262a' },
];

export function paintColorBlocks(): Block[] {
  return PAINT_COLORS.map((color) => color.block);
}
