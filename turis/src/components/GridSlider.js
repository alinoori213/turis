import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import bs from '../images/bs.jpg'
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
 const tileData = [{
  img: 'bs.jpg',
  title: 'Breakfast',
  author: 'jill111',
  cols: 2,
  featured: true,
},
{
  img: 'bs.jpg',
  title: 'Tasty burger',
  author: 'director90',
},
{
  img: 'bs.jpg',
  title: 'Camera',
  author: 'Danson67',
},
{
  img: 'bs.jpg',
  title: 'Morning',
  author: 'fancycrave1',
  featured: true,
},
{
  img: 'bs.jpg',
  title: 'Hats',
  author: 'Hans',
},
{
  img: 'bs.jpg',
  title: 'Honey',
  author: 'fancycravel',
},
{
  img: 'bs.jpg',
  title: 'Vegetables',
  author: 'jill111',
  cols: 2,
},
{
  img: 'bs.jpg',
  title: 'Water plant',
  author: 'BkrmadtyaKarki',
},
{
  img: 'bs.jpg',
  title: 'Mushrooms',
  author: 'PublicDomainPictures',
},
{
  img: 'bs.jpg',
  title: 'Olive oil',
  author: 'congerdesign',
},
{
  img: 'bs.jpg',
  title: 'Sea star',
  cols: 2,
  author: '821292',
},
{
  img: 'bs.jpg',
  title: 'Bike',
  author: 'danfador',
},
];


export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton >
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
