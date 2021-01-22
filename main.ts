scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(false)
    music.pewPew.play()
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tiles.createTilemap(hex`12001e00050000000000000000000000000000000002040000000000000000000003000000000300040400000000000000000000000003000000000000000004000000000000000000000003000000000000000000000000000000000303000000000000000004000000030300030303000000000000000004040400000003030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000001000000000000000000000000000000010000000000010101010101010101000101010101010101`, img`
    ..................
    2..........2....2.
    22............2...
    .....2...........2
    ................22
    ........2...22.22.
    ........222...22..
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    `, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorth,sprites.castle.tilePath5,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen))
myCorg.follow()
