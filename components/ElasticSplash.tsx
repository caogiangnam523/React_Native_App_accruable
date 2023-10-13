import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `
  <div class="content">
  <div class="surface">
      <div class="waves"></div>
  </div>
  <div class="loader"></div>
  <div class="loader"></div>
</div>

<style>
:root {
  --spd: 2.5s;
  --lite: 0, 200, 180;
  --dark: #1c142d;
}

* { 
  transform-style: preserve-3d;
  box-sizing: border-box;
}

@property --c1 {
  syntax: '<color>';
  inherits: false;
  initial-value: rgba(255, 255, 255, 0);
}

@property --c2 {
  syntax: '<color>';
  inherits: false;
  initial-value: rgba(255, 255, 255, 0);
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 100vmin;
  perspective: 200vmin;
  background: radial-gradient(circle at 50% 50%, #fff0 0 50vmin, #000 500vmin), radial-gradient(circle at 50% 50%, var(--dark) 0 45vmin, #000 300vmin);
}

.content {
  width: 50vmin;
  height: 50vmin;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*** Surface ***/
.surface {
  --c1: #fff0;
  --c2: #fff0;
  background: 
      radial-gradient(circle at 34.3% 49.65%, #fff0 2vmin, var(--c1) 4vmin 4.5vmin, #fff0 5vmin 100% ),
      radial-gradient(circle at 34.3% 49.65%, #fff0 2vmin, var(--c2) 4vmin 4.5vmin, #fff0 5vmin 100% ),
      var(--dark);
  width: 70vmin;
  height: 70vmin;
  transform: rotateX(60deg);
  background-repeat: no-repeat;
  background-size: 50% 30%, 50% 30%, 100% 100%;
  background-position: 11% 49%, 120% 49%, 0 0;
  animation: colorize1 var(--spd) linear 0s infinite, colorize2 var(--spd) linear calc(calc(var(--spd) / 4) * 2) infinite;
}

@keyframes colorize1 {
  0%, 30%, 100% { --c1: #fff0; }
  5% {--c1: rgba(var(--lite), 1); }
}

@keyframes colorize2 {
  0%, 30%, 100% { --c2: #fff0; }
  5% {--c2: rgba(var(--lite), 1); }
}

.surface:before,
.surface:after {
  content: "";
  background: radial-gradient(circle at 50% 110%, #fff0 2vmin, var(--dark) calc(2vmin + 1px) 100%);
  width: 3.175vmin;
  height: 4vmin;
  position: absolute;
  left: 9.5vmin;
  top: 33.25vmin;
  transform: rotateX(90deg);
  border-radius: 1vmin;
  /*animation: hide var(--spd) 0s infinite;
  opacity: 0;*/
}

.surface:after {
  left: 37.25vmin;
  animation-delay: calc(var(--spd) / 2);
}
/*
@keyframes hide {
  0%, 10% { opacity: 1; }	
  12.5%, 100% { opacity: 0; }
}
*/

/*** Loaders ***/
.loader { 
  position: absolute;
  width: 31vmin;
  height: 31vmin;
  background: 
      radial-gradient(circle at 50% 50%, rgba(var(--lite), 1) calc(1.5vmin - 1px), #fff0 calc(1.5vmin + 1px) 100%), 
      radial-gradient(circle at 50% 50%, rgba(var(--lite), 0.25) calc(1.5vmin - 1px), #fff0 calc(1.5vmin + 1px) 100%), 
      radial-gradient(circle at 50% 50%, rgba(var(--lite), 0.6) calc(1.5vmin - 2px), #fff0 calc(1.5vmin + 1px) 100%), 
      radial-gradient(circle at 50% 50%, rgba(var(--lite), 0.4) calc(1.5vmin - 3px), #fff0 calc(1.5vmin + 1px) 100%), 
      radial-gradient(circle at 50% 50%, rgba(var(--lite), 0.2) calc(1.5vmin - 4px), #fff0 calc(1.5vmin + 0px) 100%);
  background-size: 3vmin 3vmin;
  background-position: 0.1vmin 47%, 0.05vmin 48%, 0.025vmin 50%, 0.0125vmin 53%, 0.0125vmin 56%;
  background-repeat: no-repeat;
  border-radius: 100%;
  transform: rotate(90deg);
  transition: all 1s ease 0s;
  animation: loading-right var(--spd) linear 0s infinite;
  filter: drop-shadow(0px 0px 1px black);
}

.loader + .loader { 
  animation-name: loading-left;
}

@keyframes loading-right {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes loading-left {
  0% { transform: rotateX(180deg) rotate(0deg); }
  100% { transform: rotateX(180deg) rotate(360deg); }
}



/*** Waves ***/
.waves {
  width: 100%;
  height: 100%;
  position: absolute;
  background: 
      radial-gradient(circle at 77% 49%, #fff0 1.5vmin, #0008 4.7vmin, #fff0 calc(4.7vmin + 1px) 100%),		
      radial-gradient(circle at 77% 50%, #fff0 4vmin, #fff6 calc(4vmin + 1px) calc(4vmin + 3px), #fff0 5.25vmin 100%),	
      radial-gradient(circle at 77% 48%, #fff0 4vmin, #0004 calc(4vmin + 1px) calc(4vmin + 3px), #fff0 5.25vmin 100%),
      radial-gradient(circle at 22.5% 49%, #fff0 1.5vmin, #0008 4.7vmin, #fff0 calc(4.7vmin + 1px) 100%),		
      radial-gradient(circle at 22.5% 50%, #fff0 4vmin, #fff6 calc(4vmin + 1px) calc(4vmin + 3px), #fff0 5.25vmin 100%),	
      radial-gradient(circle at 22.5% 48%, #fff0 4vmin, #0004 calc(4vmin + 1px) calc(4vmin + 3px), #fff0 5.25vmin 100%);
}

.waves:before, 
.waves:after {
  content: "";
  width: 5vmin;
  height: 4vmin;
  border-radius: 100%;
  position: absolute;
  top: 32.5vmin;
  left: 8.725vmin;
  border: 1px solid rgba(var(--lite), 0.25);
  animation: wave var(--spd) linear 0s infinite;
  transform:scale(0); 
  opacity: 0;
  filter: blur(0px);
  box-sizing: border-box;
  box-shadow: 0 0 1vmin 1vmin var(--dark) inset,  0 0 1vmin 1vmin var(--dark) ;
  filter:blur(1px);
}

.waves:after {
  left: 36.2vmin;
  animation-delay: calc(calc(var(--spd) / 4) * 1.85); /*1.9s*/
}

@keyframes wave {
  0% { transform:scale(0); opacity: 1; background: #fff0; filter: blur(3px);}
  25% { transform:scale(1.65); opacity: 0.25;}
  40% { transform:scale(0.8); opacity: 0.5;}
  50% { transform:scale(1.25); opacity: 0.15; background: #fff0; filter: blur(1px);}
  70%, 100% { transform:scale(0); opacity: 0.75; background:#0008; filter: blur(10px);}	
}
</style>`
};

export default function ElasticSplash() {
  const { width } = useWindowDimensions();
  return (
    <RenderHtml
      contentWidth={width}
      source={source}
    />
  );
}