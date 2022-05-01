import React from 'react';
import './Blogs.css';


const Blogs = () => {
    return (
        <div className='container blogs'>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            What is difference between javascript and nodejs ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            Difference between javascript and jodejs: JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                            <div>
                                <strong>JavaScript:</strong>
                                <ul>
                                    <li>JavaScript is programming language. It running in any web browser with proper browser Engine.</li>
                                    <li>Mainly using for any client side activity for a web application, like possible attribute validation or refeshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</li>
                                    <li>
                                        Java Script runnign any engine like Spider monkey (Firee Fox), JavaScript Core (Safari), V8(Google Chrome).
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <strong>Nodejs:</strong>
                                <ul><li>It is an interperter and evironment for JavaScript with soem specific useful libraries which java Script programming can use separately.</li>
                                    <li>
                                        It mainly using for accessing or preforming any non-blocking operation of any operating system, like creating or executing shell script or accessing any hardware specific information for runing any backend job.
                                    </li>
                                    <li>Node Js only run in v8 engine which mainly using by google Chrome. And java scrip program which will be written under this Node JS will be alwasy run in v8 Engine.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            When should you use nodejs and when should you use mongodb ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            Node.js is an open source server environment which uses JavaScript on the server to develop backend applications.MongoDB is undoubtedly one of the most popular NoSQL database choices today. And it has a great community and ecosystem.
                            <div>
                                <strong>When use Nodejs: </strong>
                                Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...
                                So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.
                            </div>
                            <br />
                            <div>
                                <strong>When use MongoDB:</strong>
                                If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            What is difference between sql and nosql databases ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or json.
                            <div>
                                <strong>Relational database management system </strong>
                                <ul>
                                    <li>These databases have fixed or static or predefined schema </li>
                                    <li>These databases are not suited for hierarchical data storage. </li>
                                    <li>These databases are best suited for complex queries </li>
                                    <li>Vertically Scalable </li>
                                    <li>Follows ACID property </li>
                                </ul>
                            </div>
                            <div>
                                <strong>Non-relational or distributed database system.</strong>
                                <ul>
                                    <li>They have dynamic schema </li>
                                    <li>These databases are best suited for hierarchical data storage. </li>
                                    <li>These databases are not so good for complex queries </li>
                                    <li>	Horizontally scalable </li>
                                    <li>Follows CAP(consistency, availability, partition tolerance) </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            What is the purpose of jwt and how does it work ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <div>
                                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            </div>
                            <div>
                                Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
                            </div>
                            <div>
                                When it comes to APIs, JWTs are the standard. They offer a compact and safe method of information exchange without the need for a centralized token database.

                                Now that you have answers to what is JWT? and what are tokens?, you can create more secure APIs.
                            </div>
                            <div>
                                Akana automates security and makes it easy to apply JWT and OAuth, among other policies. This helps you ensure that your backend data is secure. And Akana helps you avoid the risk of an API attack.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

