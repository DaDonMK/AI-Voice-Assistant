import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core'

const useStyles = makeStyles({
    media:  {
        height: 250
    },
    border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
      },
      activeCard: {
        borderBottom: '10px solid #22289a',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        padding: '0 16px',
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
})

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage}, i}) => {
    const classes = useStyles()


    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage ? urlToImage : 'https://www.bag.admin.ch/bag/en/home/das-bag/aktuell/news/news-03-12-2020/_jcr_content/image.imagespooler.png/1607538628591/588.1000/Icons-18.png'}/>
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>

                </div>
                <Typography className={classes.title} gutterBottom variant='h6'>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
