import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

function calculatePath(endNode: Node): string {
  const path: string[] = [];
  let currentNode: Node = endNode;
  console.log(endNode)
  while (currentNode) {
    path.push(`${currentNode.x},${currentNode.y},${currentNode.z}`);
    currentNode = currentNode.parent;
  }
  return path.reverse().join(';');
}

class Node {
  constructor(
    public x: number,
    public y: number,
    public z: number,
    public g: number,
    public h: number,
    public parent: Node,
  ) { }

  public isEqualTo(node: Node): boolean {
    return this.x === node.x && this.y === node.y && this.z === node.z;
  }

  public get f(): number {
    return this.g + this.h;
  }

  public calculateH = (end: Node): void => {
    this.h = Math.abs(end.x - this.x) + Math.abs(end.y - this.y) + Math.abs(end.z - this.z);
  }

  public getNeighbors = (): Node[] => {
    const neighbors: Node[] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) {
            continue;
          }
          const node = new Node(this.x + x, this.y + y, this.z + z, 0, 0, null);
          neighbors.push(node);
        }
      }
    }
    return neighbors;
  }

  public compareTo(other: Node): number {
    if (this.f < other.f) {
      return -1
    }
    if (this.f > other.f) {
      return 1
    }
    return 0
  }

}
@Controller('path')
export class PathController {
  @Get('/:cx/:cy/:cz/:tx/:ty/:tz')
  async pathfind(
    @Param('cx', ParseIntPipe) x,
    @Param('cy', ParseIntPipe) y,
    @Param('cz', ParseIntPipe) z,
    @Param('tx', ParseIntPipe) tx,
    @Param('ty', ParseIntPipe) ty,
    @Param('tz', ParseIntPipe) tz,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const startNode = new Node(x, y, z, 0, 0, null);
      const endNode = new Node(tx, ty, tz, 0, 0, null);

      startNode.calculateH(endNode);

      let closestNode = startNode

      const openList: Node[] = [startNode];
      const closedList: Node[] = [];
      while (openList.length > 0) {
        const currentNode = openList.shift() as Node;
        if (currentNode.isEqualTo(endNode)) {
          resolve(calculatePath(currentNode));
          return;
        }
        closedList.push(currentNode);

        if (currentNode.f < closestNode.f) {
          closestNode = currentNode;
        }

        const neighbors = currentNode.getNeighbors();
        neighbors.forEach(neighbor => {
          if (closedList.find(node => node.isEqualTo(neighbor)) !== undefined) {
            return;
          }
          const g = currentNode.g + 1;
          let openNode = openList.find(node => node.isEqualTo(neighbor));
          if (openNode === undefined) {
            openNode = neighbor;
            openNode.parent = currentNode;
            openList.push(openNode);
          }
          if (g < openNode.g) {
            openNode.g = g;
            openNode.calculateH(endNode);
            openNode.parent = currentNode;
          }
        });
      }
      resolve(calculatePath(closestNode));
    })
  }
}
