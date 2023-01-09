import './InteractiveRatingComponent.css';
import starIcon from '../../images/icon-star.svg';
import thankYouIllustration from '../../images/illustration-thank-you.svg';
import { useState } from 'react';

export default function InteractiveRatingComponent() {
    const [wasSubmitted,setWasSubmitted] = useState(false);
    const [rating,setRating] = useState();

    return !wasSubmitted ? (
        <main className='interactive-rating-component'>
            <img src={starIcon} alt='star-icon' className='star-icon' />

            <div className='informations'>
                <h1 className='title'>
                    How did we do?
                </h1>

                <p className='description'>
                    Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
            </div>

            <div className='rating-buttons-space'>
                {[1,2,3,4,5].map(number => (
                    <button className={rating === number ? 'rating-button selected' : 'rating-button'} onClick={() => {setRating(rating === number ? undefined : number)}} key={number.toString()}>
                        {number}
                    </button>
                ))}
            </div>

            <button className={rating ? 'submit-button active' : 'submit-button'} onClick={() => {if (rating) {setWasSubmitted(true)}}}>
                Submit
            </button>
        </main>
    ) : (
        <main className='interactive-rating-component submitted'>
            <img src={thankYouIllustration} alt='Thank you illustration' />

            <p className='selected-grade-notification'>
                You selected {rating} out of 5
            </p>

            <div className='informations'>
                <h1 className='title'>
                    Thank you!
                </h1>

                <p className='description'>
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don't hesitate to get in touch!
                </p>
            </div>
        </main>
    )
}