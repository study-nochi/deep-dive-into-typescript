declare function canGrantWish(wish: string): boolean;

declare function grantWish(wish: string) {
  return true;
};

class Fairy {
  canGrantWish(wish: string): boolean;
  grantWish(wish: string) {
    return true;
  }
}
