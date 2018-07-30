import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const customStyles = {
  carousel: {
    width: '50%',
    zIndex: 0,
    marginLeft: '40%',
    marginTop: '23%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const RaceSelector = props => {
  return (
    <Carousel
      key="races"
      showArrows={false}
      useKeyboardArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      onChange={props.handleClick}
      selectedItem={props.selectedItem}
      className={props.classes.carousel}
    >
      {props.races.map(item => {
        let itemLow = item.toString().toLowerCase();
        return (
          <div key={item}>
            <img src={require(`../images/race/${itemLow}.jpg`)} alt={itemLow} />
          </div>
        );
      })}
    </Carousel>
  );
};

RaceSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(customStyles)(RaceSelector);
