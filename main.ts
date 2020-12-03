// enums for actions.
enum ActionKind {
    Walking,
    Idle,
    Jumping
} 
// New SpriteKind, SpriteKind.Gap. 
namespace SpriteKind {
    export const Gap = SpriteKind.create()
}
//All the images for animating our duck.
let duckAnimationFrames = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
    img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
    img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
    img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
    img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `,
    img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    . b b b d 5 5 5 5 5 4 4 4 4 4 b
    b d d d b b d 5 5 4 4 4 4 4 b .
    b b d 5 5 5 b 5 5 5 5 5 5 b . .
    c d c 5 5 5 5 d 5 5 5 5 5 5 b .
    c b d c d 5 5 b 5 5 5 5 5 5 b .
    . c d d c c b d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
    . . . . . . . . . . . . . . . .
`]
//All the images for our top obstacles.
let obstacleTopImgs = [
    img`
            .....6eeeeeeeeeece6.....
            ....6776eeeeeeeee676....
            ...6776666eeee6766776...
            ..6776ee77777777667776..
            ...668ce7768867788666...
            ......ce77eeee67ee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......beeeeeeeeeeb......
            .......beeeeeeeeb.......
            ........beeeeeeb........
        `,
    img`
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67ee......
            ......ee6eeeeee6ce......
            ......eefeeeeeeece......
            ......eeceeeeeeece......
            ......eeceeeeeeefe......
            ......eeceeeeeeefe......
            ......eeeeeeeeeefe......
            ......eeeeeeeeeece......
            .....6eeeeeeeeeece6.....
            ....6776eeeeeeeee676....
            ...6776666eeee6766776...
            ..6776ee77777777667776..
            ...668ce7768867788666...
            ......ce77eeee67ee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......beeeeeeeeeeb......
            .......beeeeeeeeb.......
            ........beeeeeeb........
            ........................
            ........................
            ........................
        `,
    img`
            .....6fceeeeeeeeee6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6666776...
            ..67768e67766777667776..
            ...668ee7768867788666...
            ......ee77eeee77ecee....
            ......ee6eeeeee6eef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......ceeeeeeeeeecf.....
            ......ceeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67eeee....
            ......ee6eeeeee6cef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......eeeeeeeeeeecf.....
            ......eeeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67ee......
            ......ee6eeeeee6ce......
            ......eefeeeeeeece......
            ......eeceeeeeeece......
            ......eeceeeeeeefe......
            ......eeceeeeeeefe......
            ......eeeeeeeeeefe......
            ......eeeeeeeeeece......
            .....6eeeeeeeeeece6.....
            ....6776eeeeeeeee676....
            ...6776666eeee6766776...
            ..6776ee77777777667776..
            ...668ce7768867788666...
            ......ce77eeee67ee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......eeeeeeeeeeee......
            ......beeeeeeeeeeb......
            .......beeeeeeeeb.......
            ........beeeeeeb........
            ........................
        `]
// All the images for our bottom obstacles.  
let obstacleBottomImgs = [
    img`
        ........................
        ........................
        ..........bbbb..........
        ........bbddddbb........
        .......bddbbbbddb.......
        ......bdbbddddbbdb......
        .....bdbbdbbbbdbbdb.....
        .....bdbdbddddbdbdb.....
        .....cdbbdbbbbdbbdc.....
        .....cbdbbddddbbdbc.....
        .....efbddbbbbddbce.....
        .....eeffbddddbccee.....
        .....eeeeffcccceee......
        .....ceeeeeeeeeeee......
        .....ceeeeeeeeeeee......
        .....feeeeeeeeeeee......
        .....cceeeeeeeeeee......
        ......feeeeeeeeeee......
        .....6fceeeeeeeeee6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6666776...
        ..67768e67766777667776..
        ...668ee7768867788666...
        ......ee77eeee77ecee....
        ......ee6eeeeee6eef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeecf.....
        ......ceeeeeeeeeecf.....
        ......ceeeeeeeeeeff.....
        ......feeeeeeeeeefe.....
        .....6feeeeeeeeeef6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6667776...
        ..6776ee67777777667776..
        ...668ee7768867788666...
        ......ee77eeee67ee......
        ......ee6eeeeee6ce......
        ......eefeeeeeeece......
        ......eeceeeeeeece......
        ......eeceeeeeeefe......
        ......eeceeeeeeefe......
        ......eeeeeeeeeefe......
        ......eeeeeeeeeece......
        .....6eeeeeeeeeece6.....
        ....6776eeeeeeeee676....
        ...6776666eeee6766776...
        ..6776ee77777777667776..
        ...668ce7768867788666...
        ......ce77eeee67ee......
        ......ce6eeeeee6ee......
        ......ceeeeeeeeeee......
        ......fcceeeeeecee......
        ......fccceeececce......
        ......fcceeecceccc......
        ......fccceecceccc......
        ......fccccceceecc......
        .....6fccccccccccf6.....
        ....6776ccccccccc676....
        ...6776676cccc6766776...
        ..6776cc77777777667776..
        ...668cc7768867788666...
        ......cc77cccc67cf......
        ......cc6cccccc6cf......
    `,
    img`
            ........................
            ........................
            ........................
            ........................
            ..........bbbb..........
            ........bbddddbb........
            .......bddbbbbddb.......
            ......bdbbddddbbdb......
            .....bdbbdbbbbdbbdb.....
            .....bdbdbddddbdbdb.....
            .....cdbbdbbbbdbbdc.....
            .....cbdbbddddbbdbc.....
            .....efbddbbbbddbce.....
            .....eeffbddddbccee.....
            .....eeeeffcccceee......
            .....ceeeeeeeeeeee......
            .....ceeeeeeeeeeee......
            .....feeeeeeeeeeee......
            .....cceeeeeeeeeee......
            ......feeeeeeeeeee......
            .....6fceeeeeeeeee6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6666776...
            ..67768e67766777667776..
            ...668ee7768867788666...
            ......ee77eeee77ecee....
            ......ee6eeeeee6eef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeeef.....
            ......eeeeeeeeeeecf.....
            ......ceeeeeeeeeecf.....
            ......ceeeeeeeeeeff.....
            ......feeeeeeeeeefe.....
            .....6feeeeeeeeeef6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6667776...
            ..6776ee67777777667776..
            ...668ee7768867788666...
            ......ee77eeee67ee......
            ......ee6eeeeee6ce......
        `,
    img`
            ........................
            ..........bbbb..........
            ........bbddddbb........
            .......bddbbbbddb.......
            ......bdbbddddbbdb......
            .....bdbbdbbbbdbbdb.....
            .....bdbdbddddbdbdb.....
            .....cdbbdbbbbdbbdc.....
            .....cbdbbddddbbdbc.....
            .....efbddbbbbddbce.....
            .....eeffbddddbccee.....
            .....eeeeffcccceee......
            .....ceeeeeeeeeeee......
            .....ceeeeeeeeeeee......
            .....feeeeeeeeeeee......
            .....cceeeeeeeeeee......
            ......feeeeeeeeeee......
            .....6fceeeeeeeeee6.....
            ....6776eeeeeeeee676....
            ...6777666eeee6666776...
            ..67768e67766777667776..
            ...668ee7768867788666...
            ......ee77eeee77ecee....
            ......ee6eeeeee6eef.....
        `
]
let duck = sprites.create(duckAnimationFrames[3], SpriteKind.Player)
scene.setBackgroundColor(9)
info.setScore(0)
effects.blizzard.startScreenEffect()
duck.ay = 300
game.onUpdate(function() {
	if (duck.bottom > 130 || duck.top <= -10) {
        game.over(false)
    }
})
let flapAnim = animation.createAnimation(ActionKind.Jumping, 25)
for(let index = 0; index < duckAnimationFrames.length; index++){
    flapAnim.addAnimationFrame(duckAnimationFrames[index])
}
animation.attachAnimation(duck, flapAnim)
