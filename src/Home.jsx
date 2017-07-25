import React, { Component } from 'react';
import './Home.css';
import Topics from './Topics';

class Home extends Component {
  render() {
    return (
      <div className="parallax-flex">
        <div className="parallax1">
          <div>
            <h1 className="title">Paul Walsh: Web Developer And Musician</h1>
            <div className="flex-container">
              <div className="img-container">
                <img alt="it's me" src="https://scontent.fybz1-1.fna.fbcdn.net/v/t1.0-9/13133210_10150640299429946_5889149715149311224_n.jpg?oh=affaaa127387da27ee2c3df103999230&oe=59D78C8A"></img>
              </div>

              <div className="text-container">
                <h2>About Paul</h2>

                <p>
                  I am a web developer and classically trained rock musician with a passion for solving new problems, and improving on existing solutions.
                </p>
                <p>
                  My interest in web development was spurred by someone who is also a musician, and after a few discussions I realized I'd found a deep passion for the problem solving and optimization aespects of programming! After a few months of self study I decided I really wanted to make the full commitment so I signed up for a semester at BitMaker.
                </p>
                <p>
                  At BitMaker's January 2017 Web Development Cohort I spent 500+ hours immersively building full-stack Ruby on Rails applications.
                </p>
                <p>
                  For my final project I worked with an Agile team to create <a href='https://plateagain.herokuapp.com/'>
                      Plate Again
                  </a>, an app designed to connect the needy of our society with providers of excess food.

                </p>

                <p>
                  Since as a developer I've continued to build cool and interesting things with Javascript frameworks and libraries, and am open for new opportunities in many languages. I'm currently using HTML5, CSS3, JavaScript ES5/ES6, jQuery, AJAX, PostgresSQL, SQLite, MongoDB, React.js, Express.js, Node.js, Ruby on Rails and version control on Github.
                </p>
                <p>
                  On my own time I like to keep myself busy by reading, working on new projects, lifting weights or playing guitar.
                </p>

              </div>

            </div>

          </div>
        </div>
        <div className="">
                    <Topics />
        </div>
        <div className="parallax2">

        </div>
      </div>

    );
  }
}

export default Home;
