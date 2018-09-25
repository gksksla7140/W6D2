

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();

  }

  bindEvents() {
    $('li').on('click', e=> {
      const $li = $(e.currentTarget);
      if (this.game.board.isEmptyPos($li.data('pos'))) {
        this.makeMove($li);
      }

      try {

        this.game.playMove($li.data('pos'));
      } catch(err) {
        alert(err.msg);
      }
      if (this.game.isOver()) {
        $('.winner').text(`${this.game.winner()} is the winner!!!!`);
        $('li').off("click");
      }

    });
  }

  makeMove($square) {

      if(this.game.currentPlayer === 'x') {
        $square.css('background-color', '#ff8987');
        $square.text('x');
        console.log("x");
        console.log(`${this.game.winner()}`);

      } else {
        $square.css('background-color', '#6d68ff');
        $square.text('o');
        console.log("o");
        console.log(`${this.game.winner()}`);

      }


}


  setupBoard() {
    const $ul = $('<ul>');
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        let $li = $('<li>');
        $li.data("pos", [x, y]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }

}

module.exports = View;
