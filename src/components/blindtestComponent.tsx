import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface Blindtest {
  url: string;
}

const BlindtestComponent: React.FC<Blindtest> = ({ url }) => {
  const [music, setMusic] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

useEffect( () =>
{

}, [])

}

  return (
    <>
      <div>
        <ReactPlayer
          url={url}
          playing
          controls
          width="0px"
          height="0px"
          config={{
            youtube: {
              playerVars: { showinfo: 0, controls: 1 },
            },
          }}
        />

        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button>Submit</button>
      </div>
    </>
  );
};

export default BlindtestComponent;
