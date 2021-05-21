import React from 'react';
import { connect } from 'react-redux';

class DeletePart extends React.Component {

    handleChange = (e) => {
        const { onChange } = this.props;
        onChange(e.target.value, e.target.name);
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("You deleted your account");
    }

    render() {
        const { review, } = this.props;
        return (
            <div className="additional-part">
                <h3>Delete account</h3>
                <textarea name="review" rows="3" cols="35" id="review" name="review" placeholder="Leave your review" value={review} onChange={this.handleChange}/>
                <p className="rating-title ">Please rate app</p>
                <div className="rating">
                        <input className="custom-radio" type="radio" id="rating1" name="rate" value="1" onChange={this.handleChange}/>
                        <label htmlFor="rating1">1</label>
                        <input className="custom-radio" type="radio" id="rating2" name="rate" value="2" onChange={this.handleChange}/>
                        <label htmlFor="rating2">2</label>
                        <input className="custom-radio" type="radio" id="rating3" name="rate" value="3" onChange={this.handleChange}/>
                        <label htmlFor="rating3">3</label>
                        <input className="custom-radio" type="radio" id="rating4" name="rate" value="4" onChange={this.handleChange}/>
                        <label htmlFor="rating4">4</label>
                        <input className="custom-radio" type="radio" id="rating5" name="rate" value="5" onChange={this.handleChange}/>
                        <label htmlFor="rating5">5</label>
                </div>
                <button className="send-button" onClick={this.handleClick}>Send</button>
            </div>
        );
    }
}

const mapStateToProps = ({ deletePart }) => ({
    review: deletePart.review,
    rate: deletePart.rate,
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (value, name) =>
        dispatch({
            type: name,
            payload: value,
        })
})

export default connect(mapStateToProps, mapDispatchToProps)(DeletePart);