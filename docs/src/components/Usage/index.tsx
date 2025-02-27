import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../App.css";
import { CodeDisplay } from "../Sample";
import { div } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

export default function Section({ slides }) {
  useEffect(() => {
    const sections = document.querySelectorAll(".pin-section");

    sections.forEach((section, i) => {
      const slidesEls = section.querySelectorAll(".slide");
      const colorBoxes = section.querySelectorAll(".color-box");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${slides.length * 100}%`,
          pin: true,
          scrub: true,
          id: i + 1,
        },
      });

      slidesEls.forEach((slide, index) => {
        // Animate left slides for overlapping
        tl.to(
          slide,
          {
            autoAlpha: 1, // Fade in
            duration: 0.3,
          },
          index * 1 // Sequentially trigger each slide
        );

        if (index !== slides.length - 1) {
          // Fade out only when transitioning to the next slide
          tl.to(
            slide,
            {
              autoAlpha: 0, // Fade out
              duration: 0.3,
            },
            (index + 0.7) // Delay before fading out
          );
        }

        // Animate right color boxes
        tl.to(
          colorBoxes[index],
          {
            y: "0%",
            autoAlpha: 1,
            duration: 0.3,
            filter: "blur(0px)",
          },
          index * 1
        );

        if (index !== slides.length - 1) {
          tl.to(
            colorBoxes[index],
            {
              y: "-100%",
              autoAlpha: 0,
              duration: 0.3,
              filter: "blur(10px)",
            },
            (index + 0.7)
          );
        }
      });

      // Set the initial visibility of the first slide
      gsap.set(slidesEls[0], { autoAlpha: 1 });
      gsap.set(colorBoxes[0], { y: "0%", autoAlpha: 1, filter: "blur(0px)" });
    });
  }, [slides]);




  const codes = [
    `<Box
      styles={{
        base: \`
      display:flex;
      flex-direction:column;
      justify-content:center;
      gap:20px;
      align-items:center;
      height:100vh;\`,
      }}
    >
      <Box
        styles={{
          base:\`
      display:flex;
      flex-direction:row;
      justify-content:center;
      gap:20px;
      align-items:center; \`,
        }}
      >
        <Button styles={"$buttonStyles.contained"}> Contained</Button>
        <Button
          styles={Clx("$buttonStyles.outlined", {
 
          })}
        >
          Outlined
        </Button>

        <Button styles={"$buttonStyles.text"}> Text</Button>
      </Box>
      <Box
        styles={{
          base: \`
      display:flex;
      flex-direction:row;
      justify-content:center;
      gap:20px;
      align-items:center;
      
      \`,
        }}
      >
        <Button styles={"$buttonStyles.containedMedium"}>Medium</Button>
        <Button styles={"$buttonStyles.outLinedMedium"}>Medium</Button>
        <Button styles={"$buttonStyles.textMedium"}>Medium</Button>
      </Box>
      <Box
        styles={{
          base: \`
      display:flex;
      flex-direction:row;
      justify-content:center;
      gap:20px;
      align-items:center;
      
      \`,
        }}
      >
        <Button styles={"$buttonStyles.containedSmall"}>Small</Button>
        <Button styles={"$buttonStyles.outLinedSmall"}>Small</Button>
        <Button styles={"$buttonStyles.textSmall"}>Small</Button>
      </Box>

    </Box>`,

    `
 <Box
        styles={{
          base: \`
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
          \`,
        }}
      >
        <Button
          onClick={() => toggleScreenSize("sm")}
          styles={{
            base: \`
              background-color: \${screenSize === "sm" ? "#0047AB" : "#C8C8C8"};
              color: white;
              padding: 10px 20px;
              border-radius: 5px;
              font-weight: bold;
              transition: background-color 0.3s ease;

              &:hover {
                background-color: \${screenSize === "sm" ? "#00008B" : "#E0E0E0"};
              }
            \`,
          }}
        >
          Mobile
        </Button>
        <Button
          onClick={() => toggleScreenSize("lg")}
          styles={{
            base: \`
              background-color: \${screenSize === "lg" ? "#0047AB" : "#C8C8C8"};
              color: white;
              padding: 10px 20px;
              border-radius: 5px;
              font-weight: bold;
              transition: background-color 0.3s ease;

              &:hover {
                background-color: \${screenSize === "lg" ? "#00008B" : "#E0E0E0"};
              }
            \`,
          }}
        >
          Desktop
        </Button>
      </Box>

      {/* Main Card */}
      <Box
        styles={{
          base: \`
            display: grid;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            font-size: 14px; 
            border-radius: 20px;
            margin: auto;
           
            \${
              screenSize === "lg"
                ? \`
                  width: 50%;
                  grid-template-columns: 0.5fr 1fr;
                  grid-template-rows: repeat(2, 1fr);
                  grid-template-areas: 
                    "a b"
                    "a c";
                \`
                : \`
                  width: 350px; 
                  grid-template-columns: 1fr;
                  grid-template-rows: auto;
                  gap: 10px;
                  grid-template-areas: 
                    "a"
                    "b"
                    "c";
                \`
            }
          \`,
        }}
      >
        <Box
          styles={{
            base: \`
              grid-area: a;
            \`,
          }}
        >
          <Image
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:1355,w:1080)/data/mothercare/02-july-2022/410317164_Z003_1.jpg"
            alt="Card Image"
            styles={{
              base: \`
                \${
                  screenSize === "sm"
                    ? "width: 100%; object-fit:cover; height:200px; border-radius: 20px 20px 0px 0px;"
                    : "border-radius: 20px 0px 0px 20px;"
                }
              \`,
            }}
          />
        </Box>

        <Box
          styles={{
            base: \`
              grid-area: b;
              padding: 10px 20px; 
             
              border-bottom: 1px solid gray; 
            \`,
          }}
        >
          <Box
            styles={{
              base: \`
                display: flex;
                flex-direction: column;
                gap: 10px;
              \`,
            }}
          >
            <Box
              styles={{
                base: \`
                  display: flex;
                  justify-content: space-between;
                  \${
                    screenSize === "sm"
                      ? "gap: 10px;"
                      : ""
                  }
                \`,
              }}
            >
              <Text
                styles={{
                  base: \`
                    font-size: \${screenSize === "sm" ? "16px" : "20px"};
                    font-weight: bold;
                  \`,
                }}
              >
                Regular Fit
              </Text>
              <Text
                styles={{
                  base: \`
                    font-size: \${screenSize === "sm" ? "16px" : "20px"};
                    color: gray;
                  \`,
                }}
              >
                $110.00
              </Text>
            </Box>

            <Box
              styles={{
                base: \`
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
                \`,
              }}
            >
              <Text styles={{
                base:\`
                  color:gray;
                \`,
              }}>In stock</Text>
              <Box
                styles={{
                  base: \`
                    display: flex;
                    
                    \${
                      screenSize === "sm" ? "gap: 10px;flex-wrap: wrap;" : "gap: 20px;"
                    }
                  \`,
                }}
              >
                <Button
                  styles={{
                    base: \`
                      background-color: #0047AB;
                      padding: 5px;
                      border-radius: 5px;
                      color: white;
                    \`,
                  }}
                >
                  XS
                </Button>
                <Button styles={{ base: padding: 5px; }}>S</Button>
                <Button styles={{ base: padding: 5px; }}>M</Button>
                <Button styles={{ base: padding: 5px; }}>L</Button>
                <Button styles={{ base: padding: 5px; }}>XL</Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          styles={{
            base: \`
              grid-area: c;
              padding: 20px 20px;
             
            \`,
          }}
        >
          <Box
            styles={{
              base: \`
                display: flex;
                flex-direction: column;
                gap: 30px;
              \`,
            }}
          >
            <Box
              styles={{
                base: \`
                  display: flex;
                  justify-content: space-between;
                  \${
                    screenSize === "sm"
                      ? "gap: 10px;"
                      : ""
                  }
                \`,
              }}
            >
              <Box
                styles={{
                  base: \`
                    display: flex;
                    gap: 10px;
                  \`,
                }}
              >
                <Button
                  styles={{
                    base: \`
                      background-color: #0047AB;
                      color: white;
                      font-weight: bold;
                      padding: 10px 15px;
                      border-radius: 10px;


                      &:hover {
                          background-color:#00008B;
                          transition: background-color 0.8s ease; 
                        }

                        & {
                          transition: background-color 0.8s ease; 
                        }
                    \`,
                  }}
                >
                  Buy now
                </Button>

                <Button
                  styles={{
                    base: \`
                      border: 1px solid black;
                      font-weight: bold;
                      padding: 10px 15px;
                      border-radius: 10px;
                      
                      &:hover {
                          background-color:#F0F0F0;
                          transition: background-color 0.8s ease; 
                        }

                        & {
                          transition: background-color 0.8s ease;                         }

                    \`,
                  }}
                >
                  Add to cart
                </Button>
              </Box>

              <Button styles={{
                base:\`
                  border:1px solid gray;
                  padding:0px 15px;
                  border-radius:10px;
                \`
              }}>
               <FaHeart style={{ color: "gray" }} />
            </Button>
            </Box>
            <Text>Free shipping on all continental US orders.</Text>
          </Box>
        </Box>
      </Box>
  `,
    `
  <Box
    styles={{
      base: \`
        width: 400px;
        margin: auto;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        background: white;
        text-align: center;
      \`,
    }}
  >
    <Text
      styles={{
        base: \`
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        \`,
      }}
    >
      Sign In With
    </Text>
    
    <Box
      styles={{
        base: \`
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        \`,
      }}
    >
      {/* GitHub Button */}
      <Button
        styles={{
          base: \`
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 30px;
            background: \${activeButton === "github" ? "#4285f4" : "white"};
            color: \${activeButton === "github" ? "white" : "#000"};
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s ease, color 0.3s ease;
          \`,
          hover: \`
            background: #4285f4;
            color: white;
          \`,
        }}
        onClick={() => setActiveButton("github")}
      >
        <FaGithub style={{ marginRight: "10px" }} />
        GitHub
      </Button>
  
      {/* Google Button */}
      <Button
        styles={{
          base: \`
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 30px;
            background: \${activeButton === "google" ? "#4285f4" : "white"};
            color: \${activeButton === "google" ? "white" : "#000"};
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s ease, color 0.3s ease;
          \`,
          hover: \`
            background: #4285f4;
            color: white;
          \`,
        }}
        onClick={() => setActiveButton("google")}
      >
        <FcGoogle style={{ marginRight: "10px" }} />
        Google
      </Button>
    </Box>
  
    <form onSubmit={handleFormSubmit}>
      <Box
        styles={{
          base: \`
            margin-bottom: 20px;
          \`,
        }}
      >
        {/* Username Input */}
        <Text
          styles={{
            base: \`
              text-align: left;
              margin-bottom: 5px;
              font-weight: bold;
            \`,
          }}
        >
          Username
        </Text>
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          styles={{
            base: \`
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              margin-bottom: 10px;
            \`,
          }}
        />
  
        {/* Password Input */}
        <Text
          styles={{
            base: \`
              text-align: left;
              margin-bottom: 5px;
              font-weight: bold;
            \`,
          }}
        >
          Password
        </Text>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          styles={{
            base: \`
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
            \`,
          }}
        />
      </Box>
  
      <Box
        styles={{
          base: \`
            display: flex;
            justify-content: space-between;
            align-items: center;
          \`,
        }}
      >
        {/* Forgot Password */}
        <Text
          styles={{
            base: \`
              font-size: 0.9rem;
              color: #007BFF;
              cursor: pointer;
              text-decoration: underline;
            \`,
          }}
          onClick={handleForgotPassword}
        >
          Forgot password?
        </Text>
  
        {/* Sign In Button */}
        <Button
          type="submit"
          styles={{
            base: \`
              padding: 10px 40px;
              background: #3169DA;
              color: white;
              border-radius: 5px;
              font-size: 1rem;
              font-weight: bold;
              cursor: pointer;
            \`,
          }}
        >
          Sign In
        </Button>
      </Box>
    </form>
  
    {/* Sign Up Link */}
    <Text
      styles={{
        base: \`
          margin-top: 20px;
          font-size: 0.9rem;
        \`,
      }}
    >
      Don't have an account?{" "}
      <Text
        styles={{
          base: \`
            color: #007BFF;
            text-decoration: underline;
            cursor: pointer;
          \`,
        }}
        onClick={handleSignUp}
      >
        Sign Up
      </Text>
    </Text>
  </Box>
  `,

  ];

  return (
    <div>
      <div className="lg:block hidden">
        <div className="px-36 h-screen flex items-center justify-center section pin-section">
          <div className="grid grid-cols-2 gap-10 h-full items-center">
            {/* Left Section: Slides */}
            <div className="w-[600px] h-[200px] flex items-start justify-start relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="slide center absolute inset-0 opacity-0 transition-opacity duration-300 flex items-center justify-center -ml-[320px] xl:-ml-[100px] "
                >
                  {/* <h1 className="text-red-700 bg-white rounded-2xl text-4xl w-[400px] h-[200px] font-bold flex flex-col justify-center text-center"> */}
                  {slide.text}
                  {/* </h1> */}
                </div>
              ))}
            </div>

            {/* Right Section: CodeDisplay */}
            <div className="relative w-full lg:w-[400px] xl:w-full h-[400px]  justify-self-center flex items-center ">
              {codes.map((code, index) => (
                <pre
                  key={index}
                  className="bg-gray-800 text-white rounded-xl p-4 overflow-auto max-h-[400px] w-full no-scrollbar color-box absolute inset-0  h-full opacity-0 transform translate-y-full shadow-md"
                >
                  <code className="block whitespace-pre ">{code}</code>
                </pre>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
  <div className="backdrop-blur-xl p-5">
    <div className="flex flex-col gap-6 items-start justify-start">
      {slides.map((slide, index) => (
        <div key={index} className="w-full flex flex-col gap-4">
          <div className="flex items-center justify-center">
            {/* Uncomment and style if needed */}
            {/* <h1 className="text-red-700 bg-white rounded-2xl text-4xl w-[400px] h-[200px] font-bold flex flex-col justify-center text-center"> */}
            {slide.text}
            {/* </h1> */}
          </div>
          {codes[index] && (
            <pre className="bg-gray-800 text-white rounded-xl p-4 overflow-auto max-h-[400px] w-full no-scrollbar shadow-md">
              <code className="block whitespace-pre">{codes[index]}</code>
            </pre>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

    </div>

  );
}
