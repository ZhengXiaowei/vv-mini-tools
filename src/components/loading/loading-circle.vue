<template>
  <view class="loading-loader">
    <view class="loading-inner loading-one"></view>
    <view class="loading-inner loading-two"></view>
    <view class="loading-inner loading-three"></view>
  </view>
</template>

<style lang="scss">
.loading-loader {
  position: relative;
  left: calc(50% - 31px);
  width: 128px;
  height: 128px;
  border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  perspective: 780px;
}

.loading-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
}

.loading-inner.loading-one {
  left: 0%;
  top: 0%;
  animation: loading-rotate-one 1.15s linear infinite;
  -o-animation: loading-rotate-one 1.15s linear infinite;
  -ms-animation: loading-rotate-one 1.15s linear infinite;
  -webkit-animation: loading-rotate-one 1.15s linear infinite;
  -moz-animation: loading-rotate-one 1.15s linear infinite;
  border-bottom: 6px solid #9c26b0;
}

.loading-inner.loading-two {
  right: 0%;
  top: 0%;
  animation: loading-rotate-two 1.15s linear infinite;
  -o-animation: loading-rotate-two 1.15s linear infinite;
  -ms-animation: loading-rotate-two 1.15s linear infinite;
  -webkit-animation: loading-rotate-two 1.15s linear infinite;
  -moz-animation: loading-rotate-two 1.15s linear infinite;
  border-right: 6px solid #6739b6;
}

.loading-inner.loading-three {
  right: 0%;
  bottom: 0%;
  animation: loading-rotate-three 1.15s linear infinite;
  -o-animation: loading-rotate-three 1.15s linear infinite;
  -ms-animation: loading-rotate-three 1.15s linear infinite;
  -webkit-animation: loading-rotate-three 1.15s linear infinite;
  -moz-animation: loading-rotate-three 1.15s linear infinite;
  border-top: 6px solid #e03997;
}

@keyframes loading-rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-o-keyframes loading-rotate-one {
  0% {
    -o-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -o-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-ms-keyframes loading-rotate-one {
  0% {
    -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-webkit-keyframes loading-rotate-one {
  0% {
    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-moz-keyframes loading-rotate-one {
  0% {
    -moz-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -moz-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes loading-rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-o-keyframes loading-rotate-two {
  0% {
    -o-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -o-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-ms-keyframes loading-rotate-two {
  0% {
    -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-webkit-keyframes loading-rotate-two {
  0% {
    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-moz-keyframes loading-rotate-two {
  0% {
    -moz-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -moz-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes loading-rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-o-keyframes loading-rotate-three {
  0% {
    -o-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -o-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-ms-keyframes loading-rotate-three {
  0% {
    -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-webkit-keyframes loading-rotate-three {
  0% {
    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-moz-keyframes loading-rotate-three {
  0% {
    -moz-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -moz-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>