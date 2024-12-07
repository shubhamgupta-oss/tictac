import React, { useState } from 'react';
import Box from './Box';
import './Home.css';

function Home() {
  const [num, setNum] = useState(Array(9).fill(null));
  const [check, setCheck] = useState(true);

  function checkWinner() {
    let winnersMatch = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnersMatch.length; i++) {
      let [a, b, c] = winnersMatch[i];
      if (num[a] !== null && num[a] === num[b] && num[a] === num[c]) {
        return num[a];
      }
    }


    if (num.every((cell) => cell !== null)) {
      return 'Draw';
    }

    return null;
  }

  const winner = checkWinner();

  function handleClick(index) {
    if (num[index] !== null || winner) {
      return;
    }
    const copyArray = [...num];
    copyArray[index] = check ? 'X' : 'O';
    setNum(copyArray);
    setCheck(!check);
  }

  function resetGame() {
    setNum(Array(9).fill(null));
    setCheck(true);
  }

  return (
    <div className="homeMain">
      {winner ? (
        <div className="winnerClass">
          {winner === 'Draw' ? (
            <>
              It's a Draw! <button onClick={resetGame}>Play Again</button>
            </>
          ) : (
            <>
              The Winner is {winner}! <button onClick={resetGame}>Play Again</button>
            </>
          )}
        </div>
      ) : (
        <>
          <h1>Tic Tac Toe</h1> <br />
          <div className="homeBox">
            <Box onClick={() => handleClick(0)} value={num[0]} />
            <Box onClick={() => handleClick(1)} value={num[1]} />
            <Box onClick={() => handleClick(2)} value={num[2]} />
          </div>

          <div className="homeBox">
            <Box onClick={() => handleClick(3)} value={num[3]} />
            <Box onClick={() => handleClick(4)} value={num[4]} />
            <Box onClick={() => handleClick(5)} value={num[5]} />
          </div>

          <div className="homeBox">
            <Box onClick={() => handleClick(6)} value={num[6]} />
            <Box onClick={() => handleClick(7)} value={num[7]} />
            <Box onClick={() => handleClick(8)} value={num[8]} />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
