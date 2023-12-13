import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Img, Line, List, Text } from "components";
import { Button } from "@mui/material";
const LandingWhalesPage = () => {


  const [email,setEmail] = useState('');
  const [valid,setValid] = useState(true);
  const [error,setError] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    window.location.href="https://app.loch.one/welcome";
  };
  
 const handleChange = (event) => { 
  setEmail(event.target.value);  
  console.log(email)
}
const bothChange = (event) => {
  handleChange(event);
  emailValidation(event);
}

  const emailValidation = (event) => {
    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(event.target.value)){
      setError("");
      setValid(false);
    }
    else{
      setError("Required");
      setValid(true);
    }
  }

  return (
    <>
      <div className="bg-gray-900 flex font-inter mx-auto relative w-full">
        <div className="bg-gradient  flex flex-col items-center justify-start mt-auto p-11 md:px-5 w-[66%]">
          <div className="flex flex-col items-start justify-start mb-[135px] w-[96%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start w-[90%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-[42px] w-[44%] md:w-full">
                <Img className="h-8 w-8" src="images/img_bell.svg" alt="bell" />
                <Text
                  className="leading-[120.00%] sm:text-[27px] md:text-[29px] text-[31px] text-gray-100 text-shadow-ts w-[98%] sm:w-full"
                  size="txtInterMedium31"
                >
                  Get notified when a highly correlated whale makes a move
                </Text>
                <Text
                  className="leading-[120.00%] text-base text-gray-100_99 w-full"
                  size="txtInterMedium16"
                >
                  Find out when a certain whale moves more than any preset
                  amount on-chain or when a dormant whale you care about becomes
                  active.
                </Text>
              </div>
              <Img
                className="h-[304px] md:h-auto object-cover"
                src="images/img_maskgroup.png"
                alt="maskgroup"
              />
            </div>
            <div className="flex flex-col items-center justify-start mt-[61px] w-[83%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between w-full">
                <Img
                  className="h-[306px] md:h-auto object-cover rounded-[12px]"
                  src="images/img_cohorts1.png"
                  alt="cohortsOne"
                />
                <div className="flex flex-col gap-4 items-end justify-start md:mt-0 mt-[17px]">
                  <Img className="h-8 w-8" src="images/img_eye.svg" alt="eye" />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Text
                      className="leading-[120.00%] sm:text-[27px] md:text-[29px] text-[31px] text-gray-100 text-right w-full"
                      size="txtInterMedium31"
                    >
                      Watch what the whales are doing
                    </Text>
                    <Text
                      className="leading-[120.00%] text-base text-gray-100_99 text-right w-full"
                      size="txtInterMedium16"
                    >
                      All whales are not equal. Know exactly what the whales
                      impacting YOUR portfolio are doing.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[527px] mt-[21px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-100 text-right"
              size="txtInterMedium25"
            >
              Testimonials
            </Text>
            <Line className="bg-gray-300_7f h-px mt-[19px] w-[83%]" />
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-[39px] w-full">
              <Img
                className="h-[60px] md:mt-0 mt-[77px] w-[60px]"
                src="images/img_television.svg"
                alt="television"
              />
              <List
                className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-5 rounded-[12px] shadow-bs w-[353px]">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterSemiBold16"
                    >
                      Jack F
                    </Text>
                    <Text
                      className="text-[13px] text-gray-500 w-auto"
                      size="txtInterMedium13"
                    >
                      Ex Blackrock PM
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="leading-[120.00%] max-w-[313px] md:max-w-full text-base text-gray-900_01"
                      size="txtInterMedium16Gray90001"
                    >
                      “Love how Loch integrates portfolio analytics and whale
                      watching into one unified app.”
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-5 rounded-[12px] shadow-bs w-[353px]">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterSemiBold16"
                    >
                      Yash P
                    </Text>
                    <Text
                      className="text-[13px] text-gray-500 w-auto"
                      size="txtInterMedium13"
                    >
                      Research, 3poch Crypto Hedge Fund
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="leading-[120.00%] max-w-[313px] md:max-w-full text-base text-gray-900_01"
                      size="txtInterMedium16Gray90001"
                    >
                      <>
                        “I use Loch everyday now. I don&#39;t think I could
                        analyze crypto whale trends markets without it. I&#39;m
                        addicted!”
                      </>
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end ml-[-150px] my-auto p-[137px] md:px-5 shadow-bs1 w-[45%] z-[1]">
          <div className="flex flex-col gap-6 items-center justify-start mb-[171px] mt-[230px] w-full">
            <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="sm:text-[35px] md:text-[37px] text-[39px] text-gray-400"
                    size="txtInterMedium39"
                  >
                    <>
                      Sign up for <br />
                      exclusive access.
                    </>
                  </Text>
                </div>
              </div>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={email}
                onChange={(e) => bothChange(e)}
                id="email"
                label="Your email address"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{sx:{color:"#bdbdbd"}}}
              />
              <div className='errorclass'>{error}</div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={valid}
                sx={{ mt: 3, mb: 2, bgcolor: 'text.primary'}}
              >
                Get started
              </Button>
              </Box>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center py-[18px] rounded-lg w-auto">
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtInterSemiBold16"
                >
                  You’ll receive an email with an invite link to join.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingWhalesPage;
