import { useState, useEffect } from "react";
import { FeedbackWrap } from "./App.styled"
import { FeedbackSection } from "../Section/Section";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";
import { Notification } from "../Notification/Notification";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const options = {
    good,
    neutral,
    bad,
  }

  /* const isfirstRender = useRef(true); */

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
    
      default:
        break;
    }
  }
  

  useEffect(() => {

    /* if (isfirstRender.current) {
      isfirstRender.current = false;
      return;
    } */

    if (good === 0 && neutral === 0 && bad === 0) {
      return;
    }
    // console.log(`bla `)
    setTotal(good + neutral + bad);
    setPositivePercentage((good/(good + neutral + bad))*100)
  }, [bad, good, neutral]);


  return (
    <FeedbackWrap> 

      <FeedbackSection title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback} />

      </FeedbackSection>
     
      <FeedbackSection title="Statictics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage} />
      </FeedbackSection>

      <Notification message="There is no feedback" total={total}/>

    </FeedbackWrap>
  )
}



