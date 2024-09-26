import React from "react";
import "../App.css"
import { OpenWhatshapp } from "./helper/whatshapp";

function DefaultWhatshapp() {
    return(
        <a onClick={OpenWhatshapp}>
            <div class="whatsapp-icon">
                    <svg width="40" height="40" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5314 5.42686C22.8783 2.77059 19.3498 1.3071 15.5908 1.30554C7.84492 1.30554 1.54091 7.60937 1.5378 15.3573C1.53676 17.8341 2.18378 20.2518 3.41359 22.3829L1.41992 29.6649L8.86962 27.7107C10.9223 28.8304 13.2333 29.4205 15.5851 29.4212H15.591C23.3359 29.4212 29.6406 23.1168 29.6436 15.3686C29.6451 11.6135 28.1848 8.08295 25.5314 5.42686ZM15.5908 27.0479H15.5859C13.4901 27.0471 11.4347 26.4838 9.64109 25.4198L9.21477 25.1666L4.794 26.3263L5.97397 22.0162L5.69616 21.5743C4.52692 19.7146 3.9095 17.5651 3.91054 15.3582C3.91296 8.9183 9.1528 3.67898 15.5955 3.67898C18.7153 3.68002 21.648 4.89651 23.8531 7.10429C26.0583 9.31208 27.2721 12.2467 27.271 15.3677C27.2682 21.8081 22.0288 27.0479 15.5908 27.0479V27.0479ZM21.9976 18.3C21.6466 18.1242 19.9202 17.275 19.5982 17.1576C19.2766 17.0405 19.0422 16.9821 18.8084 17.3335C18.5742 17.6849 17.9014 18.4759 17.6964 18.7101C17.4915 18.9445 17.2869 18.9739 16.9357 18.798C16.5845 18.6223 15.4532 18.2514 14.1119 17.0552C13.0681 16.1241 12.3635 14.9743 12.1585 14.6229C11.9539 14.2712 12.1568 14.0995 12.3126 13.9063C12.6927 13.4343 13.0733 12.9394 13.1903 12.7052C13.3075 12.4708 13.2488 12.2657 13.1609 12.09C13.0733 11.9143 12.3711 10.186 12.0786 9.48275C11.7933 8.79834 11.5041 8.89077 11.2884 8.88004C11.0838 8.86983 10.8496 8.86775 10.6154 8.86775C10.3814 8.86775 10.001 8.95551 9.679 9.30723C9.35722 9.65878 8.45022 10.5081 8.45022 12.2365C8.45022 13.9648 9.70843 15.6344 9.88394 15.8688C10.0595 16.1032 12.36 19.6498 15.8823 21.1706C16.72 21.5327 17.374 21.7486 17.8841 21.9104C18.7253 22.1777 19.4905 22.1399 20.0957 22.0496C20.7704 21.9487 22.1729 21.2 22.4658 20.3799C22.7583 19.5596 22.7583 18.8567 22.6704 18.7101C22.5828 18.5637 22.3486 18.4759 21.9976 18.3V18.3Z" fill="white"/>
                    </svg>
            </div>
        </a>
    )
}

export default DefaultWhatshapp;