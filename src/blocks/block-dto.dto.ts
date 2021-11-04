export default class CreateBlockDto {
  name: string
  state?: {
    waterlogged?: boolean
    powered?: boolean
    facing?: string
    [key: string]: any
  }
  tags?: {
    [key: string]: any
  }
  x: number
  y: number
  z: number
}
