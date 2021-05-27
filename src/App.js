import React, {useEffect, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles'

const alanKey = '0a694e5fd678da3d709b223ee2ba57452e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {

  const [newsArticles, setNewsArticles] = useState([])
  const classes = useStyles()

  useEffect(() => {


    alanBtn({
      key: alanKey,
      onCommand: ({command, articles}) => {
        console.log(command)
        if(command === 'newHeadlines'){
          setNewsArticles(articles)
          console.log(articles)
        }
      }
    })

  }, [])

  return (
    <div className="App">
      <div className={classes.logoContainer}>
        <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt="logo"/>
      </div>

      <NewsCards articles={newsArticles}/>
    </div>
  );
}

export default App;
