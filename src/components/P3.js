import Particles from "react-tsparticles";
import andriod from '../img/logos/android.jpg';
import './P3.css';

const P3 = () => {
  const particlesInit = (main) => {
    console.log(main);

    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };



  return (
    <section id='P3' className='h-100 w100' >
      {/* <img src={andriod}/> */}

      <div className="h-100 w-100">
        <Particles className="h-100 w100"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{

            "autoPlay": true,
            "background": {
              "color": {
                "value": ""
              },
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover",
              "opacity": 1
            },
            "backgroundMask": {
              "composite": "destination-out",
              "cover": {
                "color": {
                  "value": "#fff"
                },
                "opacity": 1
              },
              "enable": false
            },
            "fullScreen": {
              "enable": false,
              "zIndex": 1
            },
            "detectRetina": true,
            "duration": 0,
            "fpsLimit": 240,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onDiv": {
                  "selectors": "#repulse-div",
                  "enable": false,
                  "mode": "repulse",
                  "type": "circle"
                },
                "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                    "enable": true,
                    "force": 60,
                    "smooth": 10
                  }
                },
                "resize": true
              },
              "modes": {
                "attract": {
                  "distance": 200,
                  "duration": 0.4,
                  "easing": "ease-out-quad",
                  "factor": 1,
                  "maxSpeed": 50,
                  "speed": 1
                },
                "bounce": {
                  "distance": 200
                },
                "bubble": {
                  "distance": 300,
                  "duration": 2,
                  "mix": true,
                  "opacity": 0.8,
                  "size": 45
                },
                "connect": {
                  "distance": 70,
                  "links": {
                    "opacity": 0.5
                  },
                  "radius": 60
                },
                "grab": {
                  "distance": 400,
                  "links": {
                    "blink": false,
                    "consent": false,
                    "opacity": 1
                  }
                },
                "light": {
                  "area": {
                    "gradient": {
                      "start": {
                        "value": "#ffffff"
                      },
                      "stop": {
                        "value": "#000000"
                      }
                    },
                    "radius": 500
                  },
                  "shadow": {
                    "color": {
                      "value": "#000000"
                    },
                    "length": 1500
                  }
                },
                "push": {
                  "default": false,
                  "groups": [],
                  "quantity": 0
                },
                "remove": {
                  "quantity": 2
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4,
                  "factor": 100,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad"
                },
                "slow": {
                  "factor": 5,
                  "radius": 200
                },
                "trail": {
                  "delay": 1,
                  "pauseOnStop": false,
                  "quantity": 1
                }
              }
            },
            "manualParticles": [],
            "motion": {
              "disable": false,
              "reduce": {
                "factor": 4,
                "value": true
              }
            },
            "particles": {
              "bounce": {
                "horizontal": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                },
                "vertical": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                }
              },
              "collisions": {
                "bounce": {
                  "horizontal": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  },
                  "vertical": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  }
                },
                "enable": false,
                "mode": "bounce",
                "overlap": {
                  "enable": true,
                  "retries": 0
                }
              },
              "color": {
                "value": "#ffffff",
                "animation": {
                  "h": {
                    "count": 0,
                    "enable": true,
                    "offset": 0,
                    "speed": 1,
                    "sync": true
                  },
                  "s": {
                    "count": 0,
                    "enable": true,
                    "offset": 0,
                    "speed": 1,
                    "sync": true
                  },
                  "l": {
                    "count": 0,
                    "enable": true,
                    "offset": 0,
                    "speed": 1,
                    "sync": true
                  }
                }
              },
              "destroy": {
                "mode": "none",
                "split": {
                  "count": 1,
                  "factor": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 3
                  },
                  "rate": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": {
                      "min": 4,
                      "max": 9
                    }
                  },
                  "sizeOffset": true
                }
              },
              "gradient": [],
              "groups": {},
              "life": {
                "count": 0,
                "delay": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "sync": false
                },
                "duration": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.0001
                  },
                  "value": 0,
                  "sync": false
                }
              },
              "links": {
                "blink": false,
                "color": {
                  "value": "#33d7ed"
                },
                "consent": false,
                "distance": 175,
                "enable": true,
                "frequency": 1,
                "opacity": 0.4,
                "shadow": {
                  "blur": 5,
                  "color": {
                    "value": "#00ff00"
                  },
                  "enable": false
                },
                "triangles": {
                  "enable": false,
                  "frequency": 1
                },
                "width": 1,
                "warp": false
              },
              "move": {
                "angle": {
                  "offset": 0,
                  "value": 90
                },
                "attract": {
                  "distance": 200,
                  "enable": false,
                  "rotate": {
                    "x": 600,
                    "y": 1200
                  }
                },
                "decay": 0,
                "distance": {},
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                  "acceleration": 9.81,
                  "enable": false,
                  "inverse": false,
                  "maxSpeed": 50
                },
                "path": {
                  "clamp": true,
                  "delay": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0
                  },
                  "enable": false,
                  "options": {}
                },
                "outModes": {
                  "default": "out",
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 2,
                "spin": {
                  "acceleration": 0,
                  "enable": false
                },
                "straight": false,
                "trail": {
                  "enable": false,
                  "length": 10,
                  "fillColor": {
                    "value": "#000000"
                  }
                },
                "vibrate": false,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": true,
                  "area": 750,
                  "factor": 1000
                },
                "limit": 0,
                "value": 35
              },
              "opacity": {
                "random": {
                  "enable": true,
                  "minimumValue": 0.1
                },
                "value": {
                  "min": 0.1,
                  "max": 1
                },
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 1,
                  "sync": false,
                  "destroy": "none",
                  "startValue": "",
                  "minimumValue": 0.2
                }
              },
              "orbit": {
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 1,
                  "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 55
                },
                "width": 1
              },
              "reduceDuplicates": true,
              "repulse": {
                "random": {
                  "enable": true,
                  "minimumValue": 0
                },
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
              },
              "roll": {
                "darken": {
                  "enable": false,
                  "value": 0
                },
                "enable": false,
                "enlighten": {
                  "enable": false,
                  "value": 0
                },
                "mode": "vertical",
                "speed": 25
              },
              "rotate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
                },
                "direction": "random",
                "path": false
              },
              "shadow": {
                "blur": 0,
                "color": {
                  "value": "#000000"
                },
                "enable": false,
                "offset": {
                  "x": 0,
                  "y": 0
                }
              },
              "shape": {
                "options": {
                  "character": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "*",
                    "weight": "400"
                  },
                  "char": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "*",
                    "weight": "400"
                  },
                  "polygon": {
                    "sides": 5
                  },
                  "star": {
                    "sides": 5
                  },
                  "image": [
                    {
                      "src": 'https://www.computerhope.com/jargon/a/android.png',
                      "width": 62,
                      "height": 62
                    },
                    {
                      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://miro.medium.com/max/1400/1*ZPYJimL0vzyIQXsG9eC5YQ.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/150px-Amazon_Web_Services_Logo.svg.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://www.onlinebooksreview.com/uploads/blog_images/2017/11/23_Amazon-Web-services_Logo.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://www.softeq.com/hubfs/Main-Image/1x/Solutions-Blockchain-1x-tiny.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/150px-DigitalOcean_logo.svg.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://avatars.githubusercontent.com/u/7739233?s=200&v=4",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://itsnews.uncg.edu/wp-content/uploads/2021/02/Google-Cloud-Platform-2020-150x150.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://marmelab.com/images/blog/graphql/logo.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://symbols.getvecta.com/stencil_82/92_grpc-icon.840c3e2ee3.svg",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://miro.medium.com/max/600/1*T7aCJfw0TZOjLswzcnrRuA.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2021-09/ECX-1909_Hero_Kafka_600x400%402x-1.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/thumbnail-logo-color-full.svg",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://d1.awsstatic.com/PAC/kuberneteslogo.eabc6359f48c8e30b7a138c18177f3fd39338e05.png",
                      "width": 32,
                      "height": 32
                    }
                  ],
                  "images": [
                    {
                      "src": "https://itcgroup.io/Image%20for%20Blog/Microsoft%20Azure%20and%20Why%20we%20choose%20it-/Microsoft_Azure-Logo.wine.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://www.bloorresearch.com/wp-content/uploads/2013/03/MONGO-DB-logo-300x470--x.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://www.enfogroup.com/sites/default/files/styles/landscape_480_4_5/public/2019-05/Mulesoft_logo.png?h=7867c5e2&itok=aFjm6xK2",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://admin.davidson.fr/wp-content/uploads/nestjs-logo.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/220px-Nextjs-logo.svg.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://www.juliosblog.com/content/images/size/w2000/2016/06/nginx-smalllogo.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://www.staritservices.net/assets/images/technology/oracle-cloud.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://miro.medium.com/max/1400/0*J0QGhOOD07afS1Dr.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/180px-Python.svg.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://www.paceit.co.uk/wp-content/uploads/2021/07/xreactjs-development-company.png.pagespeed.ic.9ATImr7_pv.webp",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://www.snmpcenter.com/wp-content/uploads/2016/10/RESTful-API-logo-for-light-bg-300x103.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://uploads-ssl.webflow.com/5ed9a8df075079c286304ad6/5edd223c8ee4fe43e0955643_Sass-icon.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Logo-700x394.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://cdn.icon-icons.com/icons2/2699/PNG/512/serverless_logo_icon_170746.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://techgenix.com/tgwordpress/wp-content/uploads/2018/02/snowflake-2910087_1920-1024x791.png?ezimgfmt=rs:848x655/rscb27/ng:webp/ngcb27",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://avatars.githubusercontent.com/u/7815877?s=200&v=4",
                      "width": 32,
                      "height": 32
                    }
                  ]
                },
                "type": "image"
              },
              "size": {
                "random": {
                  "enable": true,
                  "minimumValue": 1
                },
                "value": 40,
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 35,
                  "sync": false,
                  "destroy": "none",
                  "startValue": "",
                  "minimumValue": 0.1
                }
              },
              "stroke": {
                "width": 0,
                "color": {
                  "value": "#000000",
                  "animation": {
                    "h": {
                      "count": 0,
                      "enable": true,
                      "offset": 0,
                      "speed": 1,
                      "sync": true
                    },
                    "s": {
                      "count": 0,
                      "enable": true,
                      "offset": 0,
                      "speed": 1,
                      "sync": true
                    },
                    "l": {
                      "count": 0,
                      "enable": true,
                      "offset": 0,
                      "speed": 1,
                      "sync": true
                    }
                  }
                }
              },
              "tilt": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "enable": false
              },
              "twinkle": {
                "lines": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                },
                "particles": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                }
              },
              "wobble": {
                "distance": 5,
                "enable": false,
                "speed": 50
              },
              "zIndex": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
              }
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "responsive": [],
            "style": {},
            "themes": [],
            "zLayers": 100






          }}
        />
      </div>

    </section>
  )
}

export default P3;