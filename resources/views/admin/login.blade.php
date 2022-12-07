@extends('layouts.base')
@section('body')
    <style>
        /* containerr */

        html {
            height: 100%
        }

        body {
            min-height: 100%;
            background: linear-gradient(to bottom, #c1c4c4, #bac5c5, #b3c5c7, #acc6c9, #a4c6cb, #9ec5cb, #97c5cb, #90c4cb, #89c3c7, #83c1c3, #7dc0bf, #77beba) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }

        .containerr {
            position: relative;
            max-width: 460px;
            width: 100%;
            margin: 0 auto 100px;
        }

        .containerr.active .card:first-child {
            background: #f2f2f2;

            margin: 0 15px;
        }

        .containerr.active .card:nth-child(2) {
            background: #fafafa;

            margin: 0 10px;
        }

        .containerr.active .card.alt {
            top: 20px;
            right: 0;
            width: 100%;
            min-width: 100%;
            height: auto;
            border-radius: 5px;
            padding: 60px 0 40px;
            overflow: hidden;
        }

        .containerr.active .card.alt .toggle {
            position: absolute;
            top: 40px;
            right: -70px;
            box-shadow: none;
            transform: scale(10);
            transition: transform 0.3s ease;
        }

        .containerr.active .card.alt .toggle:before {
            content: "";
        }

        .containerr.active .card.alt .title,
        .containerr.active .card.alt .input-containerr,
        .containerr.active .card.alt .button-containerr {
            left: 0;
            opacity: 1;
            visibility: visible;
            transition: 0.3s ease;
        }

        .containerr.active .card.alt .title {
            transition-delay: 0.3s;
        }

        .containerr.active .card.alt .input-containerr {
            transition-delay: 0.4s;
        }

        .containerr.active .card.alt .input-containerr:nth-child(2) {
            transition-delay: 0.5s;
        }

        .containerr.active .card.alt .input-containerr:nth-child(3) {
            transition-delay: 0.6s;
        }

        .containerr.active .card.alt .button-containerr {
            transition-delay: 0.7s;
        }

        /* Card */
        .card {
            padding-top: 100px;
            position: relative;
            background: #ffffff;
            border-radius: 5px;
            padding: 60px 0 40px 0;
            box-sizing: border-box;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            transition: 0.3s ease;
            /* Title */
            /* Inputs */
            /* Button */
            /* Footer */
            /* Alt Card */
        }

        .card:first-child {
            background: #fafafa;
            height: 10px;
            border-radius: 5px 5px 0 0;
            margin: 0 10px;
            padding: 0;
        }

        .card .title {
            position: relative;
            z-index: 1;
            border-left: 5px solid #80d0c7;
            margin: 0 0 35px;
            padding: 10px 0 10px 50px;
            color: #80d0c7;
            font-size: 32px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .card .input-containerr {
            position: relative;
            margin: 0 60px 50px;
        }

        .card .input-containerr input {
            outline: none;
            z-index: 1;
            position: relative;
            background: none;
            width: 100%;
            height: 60px;
            border: 0;
            color: #212121;
            font-size: 24px;
            font-weight: 400;
        }

        .card .input-containerr input:focus~label {
            color: #9d9d9d;
            transform: translate(-12%, -50%) scale(0.75);
        }

        .card .input-containerr input:focus~.bar:before,
        .card .input-containerr input:focus~.bar:after {
            width: 50%;
        }

        .card .input-containerr input:valid~label {
            color: #9d9d9d;
            transform: translate(-12%, -50%) scale(0.75);
        }

        .card .input-containerr label {
            position: absolute;
            top: 0;
            left: 0;
            color: #757575;
            font-size: 24px;
            font-weight: 300;
            line-height: 60px;
            transition: 0.2s ease;
        }

        .card .input-containerr .bar {
            position: absolute;
            left: 0;
            bottom: 0;
            background: #757575;
            width: 100%;
            height: 1px;
        }

        .card .input-containerr .bar:before,
        .card .input-containerr .bar:after {
            content: "";
            position: absolute;
            background: #80d0c7;
            width: 0;
            height: 2px;
            transition: 0.2s ease;
        }

        .card .input-containerr .bar:before {
            left: 50%;
        }

        .card .input-containerr .bar:after {
            right: 50%;
        }

        .card .button-containerr {
            margin: 0 60px;
            text-align: center;
        }

        .card .button-containerr button {
            outline: 0;
            cursor: pointer;
            position: relative;
            display: inline-block;
            background: 0;
            width: 240px;
            border: 2px solid #e3e3e3;
            padding: 20px 0;
            font-size: 24px;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
            overflow: hidden;
            transition: 0.3s ease;
        }

        .card .button-containerr button span {
            position: relative;
            z-index: 1;
            color: #ddd;
            transition: 0.3s ease;
        }

        .card .button-containerr button:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;
            background: #80d0c7;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            margin: -15px 0 0 -15px;
            opacity: 0;
            transition: 0.3s ease;
        }

        .card .button-containerr button:hover,
        .card .button-containerr button:active,
        .card .button-containerr button:focus {
            border-color: #80d0c7;
        }

        .card .button-containerr button:hover span,
        .card .button-containerr button:active span,
        .card .button-containerr button:focus span {
            color: #80d0c7;
        }

        .card .button-containerr button:active span,
        .card .button-containerr button:focus span {
            color: #ffffff;
        }

        .card .button-containerr button:active:before,
        .card .button-containerr button:focus:before {
            opacity: 1;
            transform: scale(10);
        }

        .card .footer {
            margin: 40px 0 0;
            color: #d3d3d3;
            font-size: 24px;
            font-weight: 300;
            text-align: center;
        }

        .card .footer a {
            color: inherit;
            text-decoration: none;
            transition: 0.3s ease;
        }

        .card .footer a:hover {
            color: #bababa;
        }

        .card.alt {
            position: absolute;
            top: 60px;
            right: -70px;
            z-index: 10;
            width: 140px;
            height: 140px;
            background: none;
            /* border-radius: 100%; */
            box-shadow: none;
            padding: 0;
            transition: 0.3s ease;
            /* Toggle */
            /* Title */
            /* Input */
            /* Button */
        }

        .card.alt .toggle {
            position: relative;
            background: #80d0c7;
            width: 140px;
            height: 200px;
            /* border-radius: 100%; */
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            color: #ffffff;
            font-size: 58px;
            line-height: 140px;
            text-align: center;
            cursor: pointer;
        }

        .card.alt .toggle:before {
            content: "";
            display: inline-block;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transform: translate(0, 0);
        }

        .card.alt .title,
        .card.alt .input-containerr,
        .card.alt .button-containerr {
            left: 100px;
            opacity: 0;
            visibility: hidden;
        }

        .card.alt .title {
            position: relative;
            border-color: #ffffff;
            color: #ffffff;
        }

        .card.alt .title .close {
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 60px;
            display: inline;
            color: #ffffff;
            font-size: 58px;
            font-weight: 400;
        }

        .card.alt .title .close:before {
            content: "×";
        }

        .card.alt .input-containerr input {
            color: #ffffff;
        }

        .card.alt .input-containerr input:focus~label {
            color: #ffffff;
        }

        .card.alt .input-containerr input:focus~.bar:before,
        .card.alt .input-containerr input:focus~.bar:after {
            background: #ffffff;
        }

        .card.alt .input-containerr input:valid~label {
            color: #ffffff;
        }

        .card.alt .input-containerr label {
            color: rgba(255, 255, 255, 0.8);
        }

        .card.alt .input-containerr .bar {
            background: rgba(255, 255, 255, 0.8);
        }

        .card.alt .button-containerr button {
            width: 100%;
            background: #ffffff;
            border-color: #ffffff;
        }

        .card.alt .button-containerr button span {
            color: #80d0c7;
        }

        .card.alt .button-containerr button:hover {
            background: rgba(255, 255, 255, 0.9);
        }

        .card.alt .button-containerr button:active:before,
        .card.alt .button-containerr button:focus:before {
            display: none;
        }

        /* Keyframes */
        @-webkit-keyframes buttonFadeInUp {
            0% {
                bottom: 30px;
                opacity: 0;
            }
        }

        @keyframes buttonFadeInUp {
            0% {
                bottom: 30px;
                opacity: 0;
            }
        }
    </style>

    <body>

        <div class="containerr" style="padding-top: 80px;">
            <div class="card"></div>
            <div class="card div1">
                <h1 class="title">Login</h1>
                <form id="loginForm" action="#" method="#">
                     @csrf
                    <div class="input-containerr">
                        <input type="text" id="email" required="required" />
                        <label for="#{label}">Email</label>
                        <div class="bar"></div>
                    </div>
                    <div class="input-containerr">
                        <input type="password" id="pass" required="required" />
                        <label for="#{label}">Password</label>
                        <div class="bar"></div>
                    </div>
                    <div class="button-containerr">
                        <button id="login" type="submit"><span>Login</span></button>
                    </div>
                </form>
            </div>
            <div class="card alt">
                <div class="toggle"></div>
                <h1 class="title">Register
                    <div class="close"></div>
                </h1>
                <form  id="regForm" action="#" method="#">
                    @csrf
                    <div class="input-containerr">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label for="#{label}">First Name</label>
                        <div class="bar"></div>
                    </div>
                    <div class="input-containerr">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label for="#{label}">Last Name</label>
                        <div class="bar"></div>
                    </div>
                    <div class="input-containerr">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label for="#{label}">Address</label>
                        <div class="bar"></div>
                    </div>
                    <div class="input-containerr">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label for="#{label}">Phone</label>
                        <div class="bar"></div>
                    </div>
                    <div class="input-containerr">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label for="#{label}">Email</label>
                        <div class="bar"></div>
                    </div>
                    <div class="input-containerr">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label for="#{label}">Password</label>
                        <div class="bar"></div>
                    </div>
                    <div class="input-containerr">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label for="#{label}">Repeat Password</label>
                        <div class="bar"></div>
                    </div>
                    <div class="input-containerr">
                        <input type="file" id="#{label}" required="required" />
                        <div class="bar"></div>
                    </div>
                    <div class="button-containerr">
                        <button id="register"><span>Register</span></button>
                    </div>
                </form>
            </div>
        </div>

    </body>
    <script src="js/login.js"></script>
    <script>
        $('.toggle').on('click', function() {
            $('.containerr').stop().addClass('active');
        });

        $('.close').on('click', function() {
            $('.containerr').stop().removeClass('active');
        });
    </script>
@endsection
