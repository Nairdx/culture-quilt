
import React, { Fragment } from "react";
import "./helpstyle.css";
import { Outlet} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../contexts/usercontext';
import { useNavigate } from 'react-router-dom';

const Help = () => {

    var modalBtns = document.querySelectorAll('.modal-open');

    modalBtns.forEach(function (btn) {
        btn.onclick = function () {
            var modal = btn.getAttribute('data-modal');

            document.getElementById(modal).style.display = "block";
        };
    });

    var closeBtns = document.querySelectorAll('.modal-close');

    closeBtns.forEach(function (btn) {
        btn.onclick = function () {
            var modal = (btn.closest(".modal").style.display = "none");
        };
    });

    window.onclick = function (e) {
        if (e.target.className === 'modal') {
            e.target.style.display = "none";
        }
    }

    const Navigate = useNavigate();
    const { isAuthenticated } = useContext(UserContext);
    if (!isAuthenticated) {
        Navigate("/culture-quilt");
    }
    return (
        <Fragment>

            <div className="helpheader">
                <h1 style={{
                    paddingTop: '10px',
                    textAlign: 'center'
                }}>
                    Frequently Asked Questions
                </h1>
            </div>
            <div className="help-grid">
                <div className="help-square">
                    <button class="modal-open" data-modal="modal1">Why was my photo/caption rejected?</button>
                    {/* <Link className="help-page" to=' auth'>Why was my photo/caption rejected?</Link> */}
                </div>
                <div className="help-square">
                    <button class="modal-open" data-modal="modal2">How to edit and or delete an uploaded photo?</button>
                </div>
                <div className="help-square">
                    <button class="modal-open" data-modal="modal3">What should I upload?</button>
                </div>
            </div>

            <div class="modal" id="modal1">
                <div class="modal-content">
                    <div class="modal-header">Why was my photo/caption rejected?
                        <button class="icon modal-close">X</button>
                    </div>
                    <div class="modal-body"></div>
                    Photos that are rejected often contain sensitive or explicit content. Please double check image submission guidelines for help.
                    <div class="modal-footer">
                        <button class="link modal-close">Close</button>
                    </div>
                </div>
            </div>

            <div class="modal" id="modal2">
                <div class="modal-content">
                    <div class="modal-header">How to edit and or delete an uploaded photo?
                        <button class="icon modal-close">X</button>
                    </div>
                    <div class="modal-body"></div>
                    You are able to view and edit uploaded photos through the submission page.
                    <div class="modal-footer">
                        <button class="link modal-close">Close</button>
                    </div>
                </div>
            </div>

            <div class="modal" id="modal3">
                <div class="modal-content">
                    <div class="modal-header">What should I upload?
                        <button class="icon modal-close">X</button>
                    </div>
                    <div class="modal-body"></div>
                    Feel free to be as creative in expressing yourself as you would like. An example of a set of images that could be uploaded is the Chicago Bean (hometown), AbbVie Innovation Center (team), and skiing (hobby).
                    <div class="modal-footer">
                        <button class="link modal-close">Close</button>
                    </div>
                </div>
            </div>


            <Outlet />
        </Fragment>
    );
};
export default Help;

{/* <div className ="helplinks">

         
                <h1>Frequently Asked Questions</h1>
                <Link className = "help-page" to =' auth'>Why was my photo/caption rejected?</Link>
                <Link className = "help-page" to ='auth'>How to edit and or delete an uploaded photo?</Link>
                <Link className = "help-page" to ='auth'>What is the purpose of the culture quilt?</Link>
                <Link className = "help-page" to ='auth'>How do I search stuff in the culture quilt?</Link> 
            </div>

             */}