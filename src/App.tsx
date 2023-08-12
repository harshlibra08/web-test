import React, { useState } from "react";
import {
  MantineProvider,
  Button,
  Stack,
  Card,
  Image,
  Paper,
  List,
  Divider,
  Group,
  TextInput,
  Autocomplete,
  Header,
  createStyles,
  ButtonProps,
  BackgroundImage,
  Center,
  Box,
  Container,
  Grid,
  Col,
  Text,
  UnstyledButton,
  SimpleGrid,
  Textarea,
} from "@mantine/core";
import BGImage from "./bgimage.png";
//import LandingImage from "./Rectangle.png";
import WHO from "./who.png";
import Strength1 from "./strength1.png";
import Strength2 from "./strength2.png";
import Strength3 from "./strength3.png";
import Gradient from "./gradient1.png";
import Specialization from "./specialization.png";
import Worldmap from "./WorldMap.png";
import PRC from "./prc.png";
import PRCBg from "./prcbg.png";
import Tifr from "./tifr.png";
import Quote from "./quote.png";
import Bhel from "./bhel.png";
import Avatar1 from "./avatar1.png";
import Avatar2 from "./avatar2.png";
import Avatar3 from "./avatar3.png";
import Event1 from "./event1.png";
import Event2 from "./event2.png";
import Event3 from "./event3.png";
import Event4 from "./event4.png";
import Event5 from "./event5.png";
import Event6 from "./event6.png";
import EventBg from "./eventbg.png";
import OurTeam from "./team.png";
import Goal1 from "./goal1.png";
import Goal2 from "./goal2.png";
import Goal3 from "./goal3.png";
import Goal4 from "./goal4.png";
import Vision from "./vision.png";
import RectangleGrey from "./Rectangle3683.png";
import RectangleOmega from "./RectangleOmega.png";
import RectangleJournal from "./RectangleJournal.png";
import BrandImg from "./brand.png";
//import FooterBg from "./footerbg.png";
//import FooterGrad from "./footergradient.png";
import LandingMain from "./landing.svg";
import Journal1 from "./journal1.png";
import Journal2 from "./journal2.png";
import Industry1 from "./ind1.png";
import Industry2 from "./ind2.png";
import Industry3 from "./ind3.png";
import Industry4 from "./ind4.png";
import DAQ from "./dataacc.png";
import IOT from "./iot.png";
import IOT1 from "./iot1.png";
import IOTApp from "./IotApp.png";
import PWHT from "./image 426.png";
import PWHT2 from "./pwht2.png";
import PWHT3 from "./pwht3.png";
import Rect3715 from "./Rectangle 3715.png";
import Rect3716 from "./Rectangle 3716.png";
import SixZone from "./sixzone.png";
import Img440 from "./image 440.png";
import WhiteBG from "./Group 1000003515.png";
import SCR from "./scr.png";
import PhaseAngel from "./Phaseangle.png";
import TPC from "./TPC.png";

import {
  IconSearch,
  IconUser,
  IconHeart,
  IconShoppingCart,
  IconChevronsDown,
  IconCircleChevronLeft,
  IconCircleChevronRight,
  IconChevronDown,
} from "@tabler/icons-react";

import { Carousel, Embla } from "@mantine/carousel";

const OptionsButton = ({ ...props }: ButtonProps) => (
  <Button
    styles={{
      root: {
        backgroundColor: "#3E3E3E",
        color: "#555459",
        fontWeight: 600,
        lineHeight: "22.4px",
        border: "1px solid",
        "&:hover": {
          backgroundColor: "#5B5B5B",
          color: "#555459",
        },
      },
      label: {
        color: "#FFFFFF",
      },
    }}
    uppercase={true}
    {...props}
  />
);

const PrimaryButton = ({ ...props }:ButtonProps)  => (
  <Button
    styles={{
      root: {
        backgroundColor: "#FFFFFF",
        color: "#555459",
        fontWeight: 600,
        lineHeight: "22.4px",
        border: "1px solid",
        "&:hover": {
          backgroundColor: "#f4f4f4",
          color: "#555459",
        },
      },
      label: {
        color: "#555459",
        textTransform: "uppercase",
      },
    }}
    {...props}
  />
);

const SecondaryButton = ({ ...props }) => (
  <Button
    styles={{
      root: {
        backgroundColor: "#FFFFFF",
        color: "#292929",
        fontWeight: 600,
        lineHeight: "22.4px",
        "&:hover": {
          backgroundColor: "#FFFFFF", // Override hover background color to match default state
        },
      },
      label: {
        color: "#292929",
      },
    }}
    {...props}
  />
);

const TertiaryButton = ({ ...props }) => (
  <Button
    styles={{
      root: {
        backgroundColor: "#FFFFFF",

        fontWeight: 700,
        lineHeight: "22.4px",
        fontSize: "12px",

        "&:hover": {
          backgroundColor: "#FFFFFF", // Override hover background color to match default state
        },
      },
      label: {
        color: "#555459",
        textTransform: "uppercase",
      },
    }}
    {...props}
  />
);

function App() {
  const links = [
    { link: "#", label: "About us" },
    { link: "#", label: "Products" },
    { link: "#", label: "Journal" },
    { link: "#", label: "Contact us" },
  ];

  /* Navbar Header */
  const useStyles = createStyles((theme) => ({
    header: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },

    inner: {
      display: "flex",
    },

    links: {
      [theme.fn.smallerThan("md")]: {
        marginLeft: 0,
      },
      marginLeft: theme.spacing.lg,
      paddingRight: 13,
      paddingTop: 23,
      paddingBottom: 21,

      color: "#292929",
      textAlign: "center",
      left: "361px",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },

    search: {
      [theme.fn.smallerThan("xs")]: {
        display: "none",
      },
    },

    link: {
      display: "block",
      lineHeight: 1,
      padding: " 0 64px",
      borderRadius: theme.radius.sm,
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
    },
  }));

  interface HeaderSearchProps {
    links: { link: string; label: string }[];
  }

  function HeaderSearch({ links }: HeaderSearchProps) {
    const { classes } = useStyles();

    const items = links.map((link) => (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    ));

    return (
      <Header height={56} className={classes.header}>
        <div className={classes.inner}>
          <Group>
            <Image
              src="https://generation-sessions.s3.amazonaws.com/25b8f529358ae6ac4e9d1cadb72e6272/img/graphic3-5@2x.png"
              alt="Libratherm Logo"
              height={"40px"}
              width={"107px"}
            />
          </Group>

          <Group>
            <Group ml={50} spacing={5} className={classes.links}>
              {items}
            </Group>
            <Autocomplete
              className={classes.search}
              placeholder="Enter your search"
              icon={<IconSearch size="20px" stroke={1.5} color="#555459" />}
              data={[]}
              radius={32}
              w={308}
              h={36}
              styles={{
                input: {
                  backgroundColor: "#F0F0F0",
                  "::placeholder": {
                    color: "#555459",
                  },
                  border: "none",
                },
              }}
            />
          </Group>

          <Group spacing={24} style={{ marginLeft: "auto" }}>
            <IconUser size={24} color="#555459" />
            <IconHeart size={24} color="#555459" />
            <IconShoppingCart size={24} color="#555459" />
            <OptionsButton uppercase={false}>We're Hiring</OptionsButton>
          </Group>
        </div>
      </Header>
    );
  }

  const [embla, setEmbla] = useState<Embla | null>(null);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "sans-serif",
        colors: {
          "libra-gray": [
            "#f8f9fa",
            "#f1f3f5",
            "#e9ecef",
            "#dee2e6",
            "#ced4da",
            "#3E3E3E",
            "#5B5B5B",
            "#495057",
            "#343A40",
            "#212529",
          ],
        },
        primaryShade: 5,
        radius: {
          xs: "4px",
        },
        defaultRadius: "xs",
      }}
    >
      <HeaderSearch links={links} />

      {/* Landingpage hero */}
      <Paper w={1400} h={688} withBorder>
        <Container>
          <Grid gutter="lg">
            <Col span={6} style={{ zIndex: 2, position: "relative" }}>
              <Text
                size="32px"
                w={374}
                h={102}
                weight={600}
                mb={26}
                mt={123}
                style={{ lineHeight: "51.2px" }}
              >
                Partners in <br /> Measurement & Control
              </Text>
              <Text
                h={44}
                w={592}
                color="#555459"
                size={14}
                weight={400}
                style={{ lineHeight: "22.4px" }}
              >
                Libratherm Instruments Pvt. Ltd. is an ISO 9001:2015 Certified
                Indian Company engaged in the manufacturing of Electronic
                Process Control Instruments and Systems since 1991.
              </Text>
              <List mt={24}>
                <List.Item
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#555459",
                    lineHeight: "28px",
                  }}
                >
                  Field Proven Products : Certified Indian Company engaged in
                  the manufacturing of Electronic Process Control
                </List.Item>
                <List.Item
                  pt={8}
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#555459",
                    lineHeight: "28px",
                    marginBottom: "37px",
                  }}
                >
                  Latest Technology : Certified Indian Company engaged in the
                  manufacturing of Electronic Process Control
                </List.Item>
              </List>
              <SecondaryButton>
                Get Started {<IconChevronsDown size="20px" color="#1D1D1B" />}{" "}
              </SecondaryButton>
            </Col>
            <Col span={6}>
              <Paper shadow="xs">
                <img
                  src={LandingMain}
                  alt="Sample"
                  width={1446}
                  height={688}
                  style={{ marginLeft: "-600px" }}
                />
              </Paper>
            </Col>
          </Grid>
        </Container>
      </Paper>

      {/* Industries we serve  */}
      <Paper w={1500} withBorder>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Divider
              size="md"
              my={"60px"}
              label={
                <Text size={"32px"} ml={140}>
                  Industries we serve
                </Text>
              }
              labelPosition="left"
            />
          </Box>
          <TertiaryButton>View All</TertiaryButton>
        </Group>

        <Group position="center" spacing="lg">
          <Card h={500} w={391}>
            <Card.Section>
              <Image
                src="https://generation-sessions.s3.amazonaws.com/af17357d9cd2ae9855b4d3ee104d414b/img/rectangle-6096.png"
                height={391}
                width={391}
                alt="Glass"
              />

              <Text weight={600} pt={16}>
                Glass Manufacture
              </Text>

              <Text size="sm" color="dimmed" lineClamp={5} pt={4}>
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
            </Card.Section>
          </Card>

          <Card h={500} w={391}>
            <Card.Section>
              <Image
                src="https://generation-sessions.s3.amazonaws.com/af17357d9cd2ae9855b4d3ee104d414b/img/unsplash-mjwgkmwkdda-1@2x.png"
                height={391}
                width={391}
                alt="Norway"
              />

              <Text weight={600} pt={16}>
                Jewelry Manufacture
              </Text>

              <Text size="sm" color="dimmed" lineClamp={5} pt={4}>
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
            </Card.Section>
          </Card>

          <Card h={500} w={391}>
            <Card.Section>
              <Image
                src="https://generation-sessions.s3.amazonaws.com/af17357d9cd2ae9855b4d3ee104d414b/img/unsplash-mjwgkmwkdda@2x.png"
                height={391}
                width={391}
                alt="Norway"
              />

              <Text weight={600} pt={16}>
                Steel Plants
              </Text>

              <Text size="sm" color="dimmed" lineClamp={5} pt={4}>
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
            </Card.Section>
          </Card>
        </Group>
      </Paper>

      <br />
      <br />
      <br />
      <br />

      {/* Our Products components */}
      <Paper w={1500} withBorder>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Divider
              size="md"
              my={"60px"}
              label={
                <Text size={"32px"} ml={140}>
                  Our Products
                </Text>
              }
              labelPosition="left"
            />
          </Box>
          <TertiaryButton>View All</TertiaryButton>
        </Group>

        <Group position="center" spacing="lg">
          <Card withBorder radius={8} h={364} w={288}>
            <Card.Section>
              <Text
                mt="xs"
                color="#555459"
                size="sm"
                weight={600}
                ml={18}
                mr={10}
              >
                Three Phase Thyristor Power Controller – POW-3-PA
              </Text>
              <Image
                src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/image-273-3@2x.png"
                height={207}
                width={207}
                pt={15}
                ml={41}
              />
            </Card.Section>

            <Text weight={400} size="20px" mt="md" color="#414141" ml={40}>
              ₹12,600 – ₹14,700
            </Text>
          </Card>

          <Card withBorder radius={8} h={364} w={288}>
            <Card.Section>
              <Text
                mt="xs"
                color="#555459"
                size="sm"
                weight={600}
                ml={18}
                mr={10}
              >
                Three Phase Thyristor Power Controller – POW-3-PA
              </Text>
              <Image
                src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/pow-3-pa-cl-50a-2@2x.png"
                height={180}
                width={140}
                pt={35}
                ml={70}
              />
            </Card.Section>

            <Text weight={400} size="20px" mt="lg" color="#414141" ml={40}>
              ₹12,600 – ₹14,700
            </Text>
          </Card>

          <Card withBorder radius={8} h={364} w={288}>
            <Card.Section>
              <Text
                mt="xs"
                color="#555459"
                size="sm"
                weight={600}
                ml={18}
                mr={10}
              >
                Three Phase Thyristor Power Controller – POW-3-PA
              </Text>
              <Image
                src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/image-277-1@2x.png"
                height={207}
                width={207}
                pt={15}
                ml={41}
              />
            </Card.Section>

            <Text weight={400} size="20px" mt="md" color="#414141" ml={40}>
              ₹12,600 – ₹14,700
            </Text>
          </Card>

          <Card withBorder radius={8} h={364} w={288}>
            <Card.Section>
              <Text
                mt="xs"
                color="#555459"
                size="sm"
                weight={600}
                ml={18}
                mr={10}
              >
                Three Phase Thyristor Power Controller – POW-3-PA
              </Text>
              <Image
                src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/image-273-3@2x.png"
                height={207}
                width={207}
                pt={15}
                ml={41}
              />
            </Card.Section>

            <Text weight={400} size="20px" mt="md" color="#414141" ml={40}>
              ₹12,600 – ₹14,700
            </Text>
          </Card>
        </Group>
      </Paper>

      <br />
      <br />
      <br />
      <br />

      {/* Providing excellence image components */}
      <Paper w={1441} h={600} withBorder>
        <BackgroundImage src={BGImage} h={600} w={1441} pos="absolute">
          <Divider size="sm" mt={150} mb={67} w={1014} ml={223} />
          <Center p="md">
            <Text color="#F6F6F6" size="48px" weight={400}>
              Providing Excellence Since 1991
            </Text>
          </Center>

          <Center>
            <Text
              color="#F6F6F6"
              size="14px"
              weight={400}
              h={66}
              w={1014}
              align="center"
            >
              We offer complete solutions for accurate measurement and control
              of Humidity, Pressure, Flow, Level, pH, Speed, etc. Our products
              are reliable and excellent in quality and are conforming to
              EN61010 International Safety Standards.
            </Text>
          </Center>
          <Divider size="sm" mt={67} w={1014} ml={223} />
        </BackgroundImage>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/*Our Strengths Component */}
      <Paper w={1440} h={964} withBorder>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Divider
              size="md"
              my={"60px"}
              mr={"157px"}
              label={
                <Text size={"32px"} ml={140}>
                  Our Strengths
                </Text>
              }
              labelPosition="left"
            />
          </Box>

          {<IconCircleChevronLeft width={37} height={37} stroke={1} />}
          {<IconCircleChevronRight width={37} height={37} stroke={1} />}
        </Group>

        <Group position="center" spacing="lg">
          <Card h={700} w={391}>
            <Card.Section>
              <Box pos="relative" w={391} h={450}>
                <Image
                  src={Strength1}
                  height={417}
                  width={329}
                  alt="Client"
                  pos="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Gradient}
                  height={417}
                  width={329}
                  alt="Client"
                  pos="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                />
                <Text
                  weight={600}
                  h={92}
                  w={347}
                  size={40}
                  pos="absolute"
                  top={283}
                  color="#FFFFFF"
                >
                  Latest Technology
                </Text>

                <Text
                  size="14px"
                  weight={600}
                  w={288}
                  h={57}
                  pt={29}
                  pos="absolute"
                  top={404}
                  color="#000000"
                >
                  We use the latest available and accessible technology for long
                  lasting and trouble-free field performance.
                </Text>
              </Box>
            </Card.Section>
          </Card>

          <Card h={700} w={391}>
            <Card.Section>
              <Box pos="relative" w={391} h={450}>
                <Image
                  src={Strength2}
                  height={417}
                  width={329}
                  alt="Client"
                  pos="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Gradient}
                  height={417}
                  width={329}
                  alt="Client"
                  pos="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                />
              </Box>
              <Text
                weight={600}
                h={92}
                w={249}
                size={40}
                pos="absolute"
                top={283}
                color="#FFFFFF"
              >
                Global Standards
              </Text>

              <Text
                size="14px"
                weight={600}
                w={288}
                h={57}
                pt={29}
                pos="absolute"
                top={404}
                color="#000000"
              >
                Our products are performing in nearly all the states in the
                country and in more than 25 countries around the world
              </Text>
            </Card.Section>
          </Card>

          <Card h={700} w={391}>
            <Card.Section>
              <Box pos="relative" w={391} h={450}>
                <Image
                  src={Strength3}
                  height={417}
                  width={329}
                  alt="Client"
                  pos="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Gradient}
                  height={417}
                  width={329}
                  alt="Client"
                  pos="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                />
              </Box>
              <Text
                weight={600}
                h={92}
                w={347}
                size={40}
                pos="absolute"
                top={283}
                color="#FFFFFF"
              >
                Client Centered Approach
              </Text>

              <Text
                size="14px"
                weight={600}
                w={288}
                h={57}
                pt={29}
                pos="absolute"
                top={404}
                color="#000000"
              >
                While designing and manufacturing our products, we sustain a way
                in which our services benefit the customers.
              </Text>
            </Card.Section>
          </Card>
        </Group>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/* Who are we Component*/}
      <Paper w={1440} h={696} withBorder bg={"black"}>
        <Container>
          <Grid gutter="lg">
            <Col span={6}>
              <Text size={14} weight={600} color="#E4E8ED" pt={191} ml={-100}>
                WHO ARE WE?
              </Text>
              <Text
                size="32px"
                w={558}
                h={102}
                weight={600}
                pt={16}
                style={{ lineHeight: "51.2px" }}
                color="#F6F6F6"
                ml={-100}
              >
                How it all began: The Omega <br />
                moment
              </Text>
              <Text
                h={110}
                w={500}
                color="#E4E8ED"
                size={14}
                weight={400}
                pt={36}
                mb={40}
                ml={-100}
                style={{ lineHeight: "22.4px" }}
              >
                Launching a business isn't easy, which is why having a
                co-founder can often make things a little smoother, especially
                if that co-founder is your best friend. While many professionals
                warn against choosing a close friend as your business partner,
                there are plenty of examples that prove it can work. The best
                example is of Airbnb..
              </Text>
            </Col>
            <Col span={6}>
              <Image
                src={RectangleOmega}
                bg={"black"}
                width={509}
                height={696}
                pos={"absolute"}
                left={931}
                pr={0}
                mt={0}
              />

              <Image
                src={WHO}
                alt="Sample"
                width={493}
                height={451}
                pos={"absolute"}
                mt={126}
                ml={114}
              />
            </Col>
          </Grid>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** World Component */}
      <Paper w={1440} h={748} withBorder>
        <Container>
          <Grid gutter="lg">
            <Col span={6}>
              <Paper>
                <Text
                  size="32px"
                  //w={558}
                  h={102}
                  color="#292929"
                  weight={600}
                  pt={205}
                  pb={16}
                  style={{ lineHeight: "51.2px" }}
                >
                  The Global Impact
                </Text>
                <Text
                  h={44}
                  w={298}
                  color="#555459"
                  size={16}
                  weight={600}
                  pt={45}
                  mb={40}
                  style={{ lineHeight: "22.4px" }}
                >
                  The products we’ve manufactured have been used over
                </Text>
                <Text
                  size="56px"
                  //w={558}
                  h={76}
                  color="#555459"
                  weight={600}
                  pt={4}
                  pl={40}
                >
                  100 million
                </Text>

                <Text
                  w={298}
                  color="#555459"
                  size={16}
                  weight={600}
                  pt={4}
                  pl={40}
                >
                  users & has been exported
                </Text>

                <Text
                  size="56px"
                  h={76}
                  color="#555459"
                  weight={600}
                  pt={4}
                  pl={80}
                  //mr={60}
                >
                  8 countries
                </Text>

                <Text
                  h={44}
                  //w={298}
                  color="#555459"
                  size={16}
                  weight={600}
                  mb={40}
                  pl={80}
                >
                  worldwide
                </Text>
              </Paper>
            </Col>
            <Col span={6}>
              <Paper w={698} h={457} mr={141} mt={135}>
                <img src={Worldmap} alt="World" />
              </Paper>
            </Col>
          </Grid>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Our process video */}
      <Paper w={1440} h={696} withBorder>
        <Container>
          <Grid gutter="lg">
            <Col span={6}>
              <Paper pos={"initial"}>
                <Image
                  src={PRC}
                  alt="prc"
                  width={607}
                  height={696}
                  left={0}
                  pos="absolute"
                  pl={0}
                  ml={0}
                />
                <Image
                  src={PRCBg}
                  alt="prc"
                  width={607}
                  height={696}
                  left={0}
                  pl={0}
                  ml={0}
                  pos="absolute"
                />
              </Paper>
            </Col>

            <Col span={6}>
              <Text
                size="32px"
                w={374}
                h={102}
                weight={600}
                mt={123}
                style={{ lineHeight: "51.2px" }}
              >
                Our Process
              </Text>
              <Text h={44} w={592} color="#555459" size={16} weight={400}>
                Our systems and instruments are developed and designed by a team
                of skilled engineers, who hold expertise in their respective
                field. We offer our clients with modernized development and
                design services for both software and hardware.
                <br />
                <br />
                <br />
                Our extensive range of products is closely inspected by
                industrial experts on stringent quality parameters to ensure its
                smooth functioning, durability, reliability, sturdy construction
                and long service life. We are currently supported by 1,50,000
                instruments, enabling us with an outstanding range of output.
              </Text>
            </Col>
          </Grid>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Carousel Testimonials */}
      <Paper w={1440} h={696} withBorder style={{ backgroundColor: "black" }}>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Divider
              size="md"
              my={"60px"}
              mr={"157px"}
              label={
                <Text size={"32px"} ml={140} color="#FFFFFF">
                  Client Testimonals
                </Text>
              }
              labelPosition="left"
            />
          </Box>

          {
            <IconCircleChevronLeft
              width={37}
              height={37}
              stroke={1}
              color="#FFFFFF"
              onClick={() => embla?.scrollPrev()}
            />
          }
          {
            <IconCircleChevronRight
              width={37}
              height={37}
              stroke={1}
              color="#FFFFFF"
              onClick={() => embla?.scrollNext()}
            />
          }
        </Group>
        <Carousel
          withControls={false}
          height={417}
          slideSize="33.333333%"
          slideGap={64}
          loop
          pl={114}
          align="start"
          style={{
            alignContent: "center",
          }}
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          ]}
          getEmblaApi={setEmbla}
        >
          <Carousel.Slide>
            <Card
              w={423}
              h={417}
              bg="#222222"
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Image
                src={Tifr}
                width={127}
                height={61}
                pos={"absolute"}
                top={32}
                left={32}
              />
              <Image
                src={Quote}
                width={36.014}
                height={32}
                pos={"absolute"}
                top={31}
                right={29}
              />
              <Text
                color="#FFFFFF"
                size={16}
                w={368}
                h={110}
                mt={112}
                ml={32}
                mr={23}
                weight={400}
              >
                Libratherm products are performing in nearly all the states in
                the country and in more than 25 countries around the world.
                While designing and manufacturing their products, they sustain a
                way in which their services benefit us.
              </Text>

              <Image
                src={Avatar1}
                width={56}
                height={56}
                pos={"absolute"}
                top={329}
                left={32}
              />
              <Text
                pos={"absolute"}
                color="#FFF"
                top={329}
                left={98}
                size={18}
                weight={400}
              >
                Varuni Vij
              </Text>
              <Text
                pos={"absolute"}
                color="#FFF"
                top={361}
                left={98}
                size={12}
                weight={400}
              >
                Former Media Planning & Content Lead, Reckitt India
              </Text>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card
              w={423}
              h={417}
              bg="#222222"
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Image
                src={Bhel}
                width={83}
                height={79}
                pos={"absolute"}
                top={15}
                left={26}
              />
              <Image
                src={Quote}
                width={36.014}
                height={32}
                pos={"absolute"}
                top={31}
                right={29}
              />
              <Text
                color="#FFFFFF"
                size={16}
                w={368}
                h={110}
                mt={112}
                ml={32}
                mr={23}
                weight={400}
              >
                Libratherm products are performing in nearly all the states in
                the country and in more than 25 countries around the world.
                While designing and manufacturing their products, they sustain a
                way in which their services benefit us.
              </Text>
              <Image
                src={Avatar2}
                width={56}
                height={56}
                pos={"absolute"}
                top={329}
                left={32}
              />
              <Text
                pos={"absolute"}
                color="#FFF"
                top={329}
                left={98}
                size={18}
                weight={400}
              >
                Varuni Vij
              </Text>
              <Text
                pos={"absolute"}
                color="#FFF"
                top={361}
                left={98}
                size={12}
                weight={400}
              >
                Former Media Planning & Content Lead, Reckitt India
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              w={423}
              h={417}
              bg="#222222"
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Image
                src={Tifr}
                width={127}
                height={61}
                pos={"absolute"}
                top={32}
                left={32}
              />
              <Image
                src={Quote}
                width={36.014}
                height={32}
                pos={"absolute"}
                top={31}
                right={29}
              />
              <Text
                color="#FFFFFF"
                size={16}
                w={368}
                h={110}
                mt={112}
                ml={32}
                mr={23}
                weight={400}
              >
                Libratherm products are performing in nearly all the states in
                the country and in more than 25 countries around the world.
                While designing and manufacturing their products, they sustain a
                way in which their services benefit us.
              </Text>
              <Image
                src={Avatar3}
                width={56}
                height={56}
                pos={"absolute"}
                top={329}
                left={32}
              />
              <Text
                pos={"absolute"}
                color="#FFF"
                top={329}
                left={98}
                size={18}
                weight={400}
              >
                Varuni Vij
              </Text>
              <Text
                pos={"absolute"}
                color="#FFF"
                top={361}
                left={98}
                size={12}
                weight={400}
              >
                Former Media Planning & Content Lead, Reckitt India
              </Text>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Events Components */}
      <Paper w={1440} h={1046} withBorder style={{ backgroundColor: "black" }}>
        <Text color="#E4E8ED" size={14} mt={106} ml={140}>
          WHAT HAVE WE BEEN DOING
        </Text>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Divider
              size="md"
              my={"60px"}
              mr={"157px"}
              label={
                <Text size={"32px"} ml={140} color="#FFF">
                  Events
                </Text>
              }
              labelPosition="left"
            />
          </Box>
        </Group>
        <Group position="center" spacing="lg">
          <Grid gutter="lg">
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event1}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  22nd January, 2023.
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Mumbai ACE Tech Exhibition
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event2}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  22nd January, 2023.
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Mumbai ACE Tech Exhibition
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event3}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  22nd January, 2023.
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Mumbai ACE Tech Exhibition
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event4}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  22nd January, 2023.
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Mumbai ACE Tech Exhibition
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event5}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  22nd January, 2023.
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Mumbai ACE Tech Exhibition
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event6}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  22nd January, 2023.
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Mumbai ACE Tech Exhibition
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
          <UnstyledButton>
            <Group>
              <Text size="md" color="white">
                Show more
              </Text>
              {<IconChevronDown size="20px" color="#FFF" />}
            </Group>
          </UnstyledButton>
        </Group>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Our team Component */}

      <Paper w={1440} h={748} withBorder style={{ backgroundColor: "black" }}>
        <Container>
          <Grid gutter="lg">
            <Col span={6}>
              <Paper pos={"initial"}>
                <Image
                  src={OurTeam}
                  alt="prc"
                  width={493}
                  height={389}
                  left={0}
                  pos="absolute"
                  pl={114}
                  ml={0}
                  pt={140}
                />
              </Paper>
            </Col>

            <Col span={6}>
              <Text
                size="32px"
                w={374}
                h={102}
                weight={600}
                mt={140}
                color="#FFF"
              >
                Our Team
              </Text>
              <Text h={44} w={596} color="#FFFFFF" size={16} weight={400}>
                Our core team comprises of people having the skill, competency,
                experience, and willingness with the zeal to excel in every
                assignment keeping the focus on our core purpose and core
                values.Our highly qualified and trained professionals assist us
                in effectively and efficiently undertaking our varied business
                operations.
                <br />
                <br />
                We face every challenge to overcome the impediments for
                successful execution and implementation of the designed system
                within our company. We make sure to pass the benefits of our
                skills, knowledge, experience, and wisdom to our employees and
                the associates. The legacy of our vision will continue, in spite
                of reaching the pinnacle of our growth and change of generation.
                We will be committed to doing the business in the right way.
              </Text>
            </Col>
          </Grid>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Our Goals Section */}
      <Paper w={1440} h={696} withBorder bg={"black"}>
        <Container>
          <Grid gutter="380px">
            <Col span={6}>
              <Text
                size="32px"
                w={596}
                h={44}
                weight={600}
                mt={145}
                style={{ lineHeight: "51.2px" }}
                color="#F6F6F6"
                ml={-100}
              >
                Our Goal
              </Text>
              <Text
                h={264}
                w={596}
                color="#E4E8ED"
                size={16}
                weight={400}
                mt={24}
                mb={40}
                ml={-100}
                style={{ lineHeight: "22.4px" }}
              >
                Libratherm has been catering to various industries by supplying
                the standard and customized process control instruments and
                systems to meet and satisfy their requirement.
                <br />
                <br />
                <br />
                Our products are widely used in Engineering Industries, Heat
                Treatment Plants, Glass Industries, Furnace & Oven Industries,
                Pharmaceutical Industries, Jewellery Industries, Power
                Generating Industries, Sponge Iron Industries, Environmental
                Chambers, Petroleum Industries, Steel Industries, Textile
                Industries, BOD Incubators, HVAC Industries, AHU Industries,
                APFC Industries, Packaging Industries, Automation Industries,
                Plastic Industries, Food Industries, Pollution Control
                Industries, Petrochemical Industries, Water Treatment Plants,
                Research and Defence Institutes.
              </Text>
            </Col>
            <SimpleGrid cols={2} pl={750} mt={-590}>
              <div style={{ marginLeft: 25 }}>
                <Image src={Goal1} height={189} width={234} />
              </div>
              <div>
                <Image src={Goal2} height={189} width={234} />
              </div>
              <div style={{ marginLeft: 25, marginTop: -190 }}>
                <Image src={Goal3} height={189} width={234} />
              </div>
              <div style={{ marginTop: -190 }}>
                <Image src={Goal4} height={189} width={234} />
              </div>
            </SimpleGrid>
          </Grid>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/**Our Specialization Component */}
      <Paper w={1440} h={696} withBorder bg={"black"}>
        <Container>
          <Grid gutter="lg">
            <Col span={6}>
              <Image
                src={RectangleGrey}
                alt="Vision"
                height={694}
                width={505}
                pos="absolute"
                pl={0}
                left={0}
              />
              <Image
                src={Specialization}
                alt="Vision"
                width={493}
                height={451}
                pos={"absolute"}
                left={114}
                mt={114}
              />
            </Col>
            <Col span={6}>
              <Text
                size="32px"
                w={596}
                h={44}
                weight={600}
                mr={114}
                mt={241}
                style={{ lineHeight: "51.2px" }}
                color="#F6F6F6"
              >
                Our Specialisation
              </Text>
              <Text
                h={176}
                w={696}
                color="#E4E8ED"
                size={16}
                weight={400}
                mb={40}
                left={730}
                mt={24}
              >
                We are specialized Temperature/Process Indicators, Large Display
                Temperature/Process Indicators, Digital Portable Thermometer &
                Hygro-Thermometer, Temperature/Process Controllers, PID
                Temperature/Process Controllers, Ramp/Soak Programmable
                Temperature/Processs Controllers
                <br />
                <br />
                Multizone PID Ramp/Soak Programmable Temperature Controllers,
                Temperature/Process Scanners, Temperature/Process Data Loggers,
                Data Acquisition Software, Temperature & Humidity (T+Rh) Sensors
                & Transmitters.
              </Text>
            </Col>
          </Grid>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/**Our Brand Component */}
      <Paper w={1440} h={696} withBorder bg={"black"}>
        <Container>
          <Grid gutter="lg">
            <Col span={6}>
              <Text
                size="32px"
                w={558}
                h={102}
                weight={600}
                pt={206}
                style={{ lineHeight: "51.2px" }}
                color="#F6F6F6"
                ml={-100}
              >
                Our Brand
              </Text>
              <Text
                h={110}
                w={596}
                color="#E4E8ED"
                size={14}
                weight={400}
                pt={96}
                ml={-100}
                style={{ lineHeight: "22.4px" }}
              >
                Our systems and instruments are developed and designed by a team
                of skilled engineers, who hold expertise in their respective
                field. We offer our clients with modernized development and
                design services for both software and hardware.
                <br />
                <br />
                Our extensive range of products is closely inspected by
                industrial experts on stringent quality parameters to ensure its
                smooth functioning, durability, reliability, sturdy construction
                and long service life. We are currently supported by 1,50,000
                instruments, enabling us with an outstanding range of output.
              </Text>
            </Col>
            <Col span={6}>
              <Image
                src={RectangleGrey}
                bg={"black"}
                width={509}
                height={696}
                pos={"absolute"}
                left={931}
                pr={0}
                mt={0}
              />

              <Image
                src={BrandImg}
                alt="Sample"
                width={493}
                height={451}
                pos={"absolute"}
                mt={126}
                ml={114}
              />
            </Col>
          </Grid>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />
      {/**Our Vision Component */}
      <Paper w={1440} h={696} withBorder bg={"black"}>
        <Container>
          <Grid gutter="lg">
            <Col span={6}>
              <Image
                src={RectangleGrey}
                alt="Vision"
                height={694}
                width={505}
                pos="absolute"
                pl={0}
                left={0}
              />
              <Image
                src={Vision}
                alt="Vision"
                width={493}
                height={451}
                pos={"absolute"}
                left={114}
                mt={114}
              />
            </Col>
            <Col span={6}>
              <Text
                size="32px"
                w={596}
                h={44}
                weight={600}
                mr={114}
                mt={251}
                style={{ lineHeight: "51.2px" }}
                color="#F6F6F6"
              >
                Our Vision
              </Text>
              <Text
                h={110}
                w={596}
                color="#E4E8ED"
                size={16}
                weight={400}
                mb={40}
                mr={114}
                mt={24}
                style={{ lineHeight: "24px" }}
              >
                Libratherm will always thrive to be one of the best companies
                manufacturing the most rugged and reliable Electronic Process
                Control Instruments, using the latest available and accessible
                technology for the long lasting and trouble-free field
                performance. While designing and manufacturing our products, we
                will sustain the way in which our services benefit the
                customers.
              </Text>
            </Col>
          </Grid>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Our Journal Component */}
      <Paper w={1440} h={964} withBorder bg={"black"}>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Text size={"32px"} mt={40} ml={114} color="#F6F6F6">
              Journal
            </Text>
            <Divider size="md" my={23} mr={114} ml={114} pb={40} />
          </Box>
        </Group>

        <Group position="center" spacing="lg">
          <Card h={700} w={391} bg={"black"}>
            <Card.Section>
              <Box pos="relative" w={391} h={450} bg={"black"}>
                <Image
                  src={RectangleJournal}
                  height={172}
                  width={325}
                  alt="Client"
                  pos="absolute"
                  top={10}
                  left={0}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Journal1}
                  height={292}
                  width={293}
                  alt="Client"
                  pos="absolute"
                  top={26}
                  left={16}
                  w="100%"
                  h="100%"
                />
                <Text
                  weight={400}
                  h={92}
                  w={347}
                  size={32}
                  pos="absolute"
                  mt={350}
                  color="#F6F6F6"
                >
                  Industries
                </Text>

                <Text
                  size="16px"
                  weight={400}
                  w={325}
                  h={46}
                  pos="absolute"
                  top={414}
                  color="#E4E8ED"
                  lineClamp={2}
                >
                  Libratherm has supplied various types of temperature
                  controllers, thyristor power controllers and control panels to
                  the industries manufacturing Files, Diamond Tools, Machine
                  Tools, Automobile parts, Hack saw blades, Stone cutting tools
                  and circular blades etc… The temperature of the electrical or
                  fuel fired heating systems, used for annealing, hardening,
                  steam bluing and similar such processes, has been in use for
                  precise control up to 1200-C, using our models PRC-300,
                  PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with
                  the sensor input from thermocouples or infrared non contact
                  sensors.
                </Text>
              </Box>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" mt={32} weight={400}>
                    Know more
                  </Text>
                </Group>
              </UnstyledButton>
            </Card.Section>
          </Card>

          <Card h={700} w={391} bg={"black"}>
            <Card.Section>
              <Box pos="relative" w={391} h={450} bg={"black"}>
                <Image
                  src={RectangleJournal}
                  height={172}
                  width={325}
                  alt="Client"
                  pos="absolute"
                  top={10}
                  left={0}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Journal2}
                  height={292}
                  width={293}
                  alt="Client"
                  pos="absolute"
                  top={26}
                  left={16}
                  w="100%"
                  h="100%"
                />
                <Text
                  weight={400}
                  h={92}
                  w={347}
                  size={32}
                  pos="absolute"
                  mt={350}
                  color="#F6F6F6"
                >
                  Services
                </Text>

                <Text
                  size="16px"
                  weight={400}
                  w={325}
                  h={46}
                  pos="absolute"
                  top={414}
                  color="#E4E8ED"
                  lineClamp={2}
                >
                  Libratherm has supplied various types of temperature
                  controllers, thyristor power controllers and control panels to
                  the industries manufacturing Files, Diamond Tools, Machine
                  Tools, Automobile parts, Hack saw blades, Stone cutting tools
                  and circular blades etc… The temperature of the electrical or
                  fuel fired heating systems, used for annealing, hardening,
                  steam bluing and similar such processes, has been in use for
                  precise control up to 1200-C, using our models PRC-300,
                  PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with
                  the sensor input from thermocouples or infrared non contact
                  sensors.
                </Text>
              </Box>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" mt={32} weight={400}>
                    Know more
                  </Text>
                </Group>
              </UnstyledButton>
            </Card.Section>
          </Card>

          <Card h={700} w={391} bg={"black"}>
            <Card.Section>
              <Box pos="relative" w={391} h={450} bg={"black"}>
                <Image
                  src={RectangleJournal}
                  height={172}
                  width={325}
                  alt="Client"
                  pos="absolute"
                  top={10}
                  left={0}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={WHO}
                  height={292}
                  width={293}
                  alt="Client"
                  pos="absolute"
                  top={26}
                  left={16}
                  w="100%"
                  h="100%"
                />
                <Text
                  weight={400}
                  h={92}
                  w={347}
                  size={32}
                  pos="absolute"
                  mt={350}
                  color="#F6F6F6"
                >
                  Applications
                </Text>

                <Text
                  size="16px"
                  weight={400}
                  w={325}
                  h={46}
                  pos="absolute"
                  top={414}
                  color="#E4E8ED"
                  lineClamp={2}
                >
                  Libratherm has supplied various types of temperature
                  controllers, thyristor power controllers and control panels to
                  the industries manufacturing Files, Diamond Tools, Machine
                  Tools, Automobile parts, Hack saw blades, Stone cutting tools
                  and circular blades etc… The temperature of the electrical or
                  fuel fired heating systems, used for annealing, hardening,
                  steam bluing and similar such processes, has been in use for
                  precise control up to 1200-C, using our models PRC-300,
                  PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with
                  the sensor input from thermocouples or infrared non contact
                  sensors.
                </Text>
              </Box>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" mt={32} weight={400}>
                    Know more
                  </Text>
                </Group>
              </UnstyledButton>
            </Card.Section>
          </Card>
        </Group>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Journal page - industry full list*/}
      <Paper w={1440} h={3140} withBorder bg={"black"}>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
              Industry
            </Text>
            <Divider size="md" my={23} mr={114} ml={114} pb={40} />
          </Box>
        </Group>
        <Grid>
          <Grid.Col span={4}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={Industry1}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Glass Manufacture
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={Industry2}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Jewelry Manufacture
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={Industry3}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Pharmaceuticals
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={Industry4}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Steel Plants
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={Industry2}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Jewelry Manufacture
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={Industry3}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Pharmaceuticals
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={Industry4}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Steel Plants
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Journal page - industry*/}
      <Paper w={1440} h={3140} withBorder bg={"black"}>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
              Industry
            </Text>
            <Divider size="md" my={23} mr={114} ml={114} pb={40} />
          </Box>
        </Group>
        <Container mt={-73}>
          <Grid gutter="lg">
            <Col span={6}>
              <Text
                size={14}
                weight={600}
                color="#E4E8ED"
                pt={191}
                ml={-160}
                mt={10}
              >
                22nd January, 2023
              </Text>
              <Box>
                <Text
                  size="32px"
                  w={558}
                  h={102}
                  weight={600}
                  pt={16}
                  style={{ lineHeight: "51.2px" }}
                  color="#F6F6F6"
                  ml={-160}
                >
                  Glass Manufacture
                </Text>
              </Box>
              <Text
                h={154}
                w={590}
                color="#E4E8ED"
                size={16}
                weight={400}
                mb={40}
                ml={-160}
              >
                Libratherm is an innovation-driven manufacturer of Process
                Control Instruments and Systems since 1991. We cater to a wide
                range of industries, by providing accurate measurement, precise
                control, and implementing modern standards in data logging and
                industrial communication. Glass is one of the industries where
                we have been supplying numerous process control instruments and
                control panels for various processes such as Glass Bending,
                Glass Toughening, and Glass Melting.
              </Text>
            </Col>
            <Col span={6}>
              <Image
                src={RectangleOmega}
                bg={"black"}
                width={509}
                height={696}
                pos={"absolute"}
                left={931}
                pr={0}
                mt={0}
              />

              <Image
                src={Industry1}
                alt="Sample"
                width={493}
                height={451}
                pos={"absolute"}
                mt={126}
                mr={112}
              />
            </Col>
          </Grid>
        </Container>

        <Group position="center" spacing="lg" pt={308}>
          <Card h={700} w={391} bg={"black"}>
            <Card.Section>
              <Box pos="relative" w={391} h={450} bg={"black"}>
                <Text
                  weight={400}
                  h={92}
                  w={347}
                  size={24}
                  mt={0}
                  color="#F6F6F6"
                >
                  Glass Bending
                  <Divider size="lg" mr={22} my={14} />
                </Text>
              </Box>
              <Image
                src={RectangleJournal}
                height={172}
                width={325}
                alt="Client"
                pos="absolute"
                top={55}
                left={0}
                w="100%"
                h="100%"
              />
              <Image
                src={Journal1}
                height={292}
                width={293}
                alt="Client"
                pos="absolute"
                top={73}
                left={16}
                w="100%"
                h="100%"
              />

              <Text
                size="14px"
                weight={400}
                w={325}
                h={136}
                pos="absolute"
                top={414}
                color="#E4E8ED"
                lineClamp={5}
              >
                Libratherm offers Ramp Soak PID Temperature Controller -
                PRC-300, High Temperature Ramp Soak PID Controller - PRC-309 and
                Three Phase Thyristor Power Controller - POW-3-PA-CL for the
                Glass Bending Process.
              </Text>
            </Card.Section>
          </Card>

          <Card h={700} w={391} bg={"black"}>
            <Card.Section>
              <Box pos="relative" w={391} h={450} bg={"black"}>
                <Text
                  weight={400}
                  h={92}
                  w={347}
                  size={24}
                  mt={0}
                  color="#F6F6F6"
                >
                  Glass Toughening
                  <Divider size="lg" mr={22} my={14} />
                </Text>
                <Image
                  src={RectangleJournal}
                  height={172}
                  width={325}
                  alt="Client"
                  pos="absolute"
                  top={55}
                  left={0}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Journal2}
                  height={292}
                  width={293}
                  alt="Client"
                  pos="absolute"
                  top={73}
                  left={16}
                  w="100%"
                  h="100%"
                />

                <Text
                  size="14px"
                  weight={400}
                  w={325}
                  h={136}
                  pos="absolute"
                  top={414}
                  color="#E4E8ED"
                >
                  Libratherm offers Multizone (upto 72 zones) Ramp Soak
                  Temperature Controller - PRC-8000 with Three Phase Thyristor
                  Power Controller - POW-3-PA-CL for the Glass Toughening
                  Process.
                </Text>
              </Box>
            </Card.Section>
          </Card>

          <Card h={700} w={391} bg={"black"}>
            <Card.Section>
              <Box pos="relative" w={391} h={450} bg={"black"}>
                <Text
                  weight={400}
                  h={92}
                  w={347}
                  size={24}
                  mt={0}
                  color="#F6F6F6"
                >
                  Glass Melting
                  <Divider size="lg" mr={22} my={14} />
                </Text>
                <Image
                  src={RectangleJournal}
                  height={172}
                  width={325}
                  alt="Client"
                  pos="absolute"
                  top={55}
                  left={0}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={WHO}
                  height={292}
                  width={293}
                  alt="Client"
                  pos="absolute"
                  top={73}
                  left={16}
                  w="100%"
                  h="100%"
                />

                <Text
                  size="14px"
                  weight={400}
                  w={325}
                  h={136}
                  pos="absolute"
                  top={414}
                  color="#E4E8ED"
                  lineClamp={5}
                >
                  Libratherm offers Thyristor Control Panel incorporating
                  250KW-500KW Three Phase Thyristor Power Controller -
                  POW-12-PA-CL and Advanced PID Temperature Controller - PID-966
                  for Furnace Oil Heating.
                </Text>
              </Box>
            </Card.Section>
          </Card>
        </Group>

        <Group position="center" spacing="sm">
          <Grid gutter="sm">
            <Grid.Col span={4}>
              <Box pos="relative" w={1440} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event1}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  PRC 300
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Ramp Soak PID Temperature Controller
                </Text>
                <UnstyledButton>
                  <Group>
                    <Text
                      size="16px"
                      color="white"
                      ml={315}
                      mt={32}
                      weight={400}
                    >
                      View
                    </Text>
                  </Group>
                </UnstyledButton>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event2}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  PRC 300 2
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Ramp Soak PID Temperature Controller
                </Text>
                <UnstyledButton>
                  <Group>
                    <Text
                      size="16px"
                      color="white"
                      ml={315}
                      mt={32}
                      weight={400}
                    >
                      View
                    </Text>
                  </Group>
                </UnstyledButton>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event3}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  PRC 300 3
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Ramp Soak PID Temperature Controller
                </Text>
                <UnstyledButton>
                  <Group>
                    <Text
                      size="16px"
                      color="white"
                      ml={315}
                      mt={32}
                      weight={400}
                    >
                      View
                    </Text>
                  </Group>
                </UnstyledButton>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event4}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  PRC 300 4
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Ramp Soak PID Temperature Controller
                </Text>
                <UnstyledButton>
                  <Group>
                    <Text
                      size="16px"
                      color="white"
                      ml={315}
                      mt={32}
                      weight={400}
                    >
                      View
                    </Text>
                  </Group>
                </UnstyledButton>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event5}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  PRC 300
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Ramp Soak PID Temperature Controller
                </Text>
                <UnstyledButton>
                  <Group>
                    <Text
                      size="16px"
                      color="white"
                      ml={315}
                      mt={32}
                      weight={400}
                    >
                      View
                    </Text>
                  </Group>
                </UnstyledButton>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event6}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  PRC 300
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Ramp Soak PID Temperature Controller
                </Text>
                <UnstyledButton>
                  <Group>
                    <Text
                      size="16px"
                      color="white"
                      ml={315}
                      mt={32}
                      weight={400}
                    >
                      View
                    </Text>
                  </Group>
                </UnstyledButton>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event6}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  PRC 300
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Ramp Soak PID Temperature Controller
                </Text>
                <UnstyledButton>
                  <Group>
                    <Text
                      size="16px"
                      color="white"
                      ml={315}
                      mt={32}
                      weight={400}
                    >
                      View
                    </Text>
                  </Group>
                </UnstyledButton>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event3}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  PRC 300
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Ramp Soak PID Temperature Controller
                </Text>
                <UnstyledButton>
                  <Group>
                    <Text
                      size="16px"
                      color="white"
                      ml={315}
                      mt={32}
                      weight={400}
                    >
                      View
                    </Text>
                  </Group>
                </UnstyledButton>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box pos="relative" w={1200} h={280}>
                <Image
                  src={EventBg}
                  height={202}
                  width={82}
                  pos="absolute"
                  top={0}
                  left={114}
                  w="100%"
                  h="100%"
                />
                <Image
                  src={Event1}
                  height={164}
                  width={164}
                  pos="absolute"
                  top={20}
                  left={135}
                  w="100%"
                  h="100%"
                />
                <Text color="#E4E8ED" size={12} ml={319}>
                  PRC 300
                </Text>
                <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                  Ramp Soak PID Temperature Controller
                </Text>
                <UnstyledButton>
                  <Group>
                    <Text
                      size="16px"
                      color="white"
                      ml={315}
                      mt={32}
                      weight={400}
                    >
                      View
                    </Text>
                  </Group>
                </UnstyledButton>
              </Box>
            </Grid.Col>
          </Grid>
        </Group>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Journal page - industry*/}
      <Paper w={1440} h={3500} withBorder bg={"black"}>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
              Services
            </Text>
            <Divider size="md" my={23} mr={114} ml={114} pb={40} />
          </Box>
        </Group>
        <Container>
          <Text color="#F6F6F6" align="center" size={32} pt={64}>
            Data Acquisition Software (DAQ)
          </Text>
          <Text
            color="#E4E8ED"
            align="left"
            size={16}
            pt={34}
            w={1006}
            weight="normal"
          >
            Libratherm offers Data Acquisition Software - which uploads the
            stored data from Libratherm devices and it saves on the computer. We
            offer customized software to meet the user's specific requirement of
            acquiring the process data for further analysis and record logging.
          </Text>
          <Image src={DAQ} width={802} height={501} pt={64} mx={"auto"} />

          <Text color="#F6F6F6" align="left" size={24} pt={128}>
            Salient Features of the Standard Software
          </Text>
          <Text
            color="#E4E8ED"
            align="left"
            size={16}
            pt={32}
            w={1006}
            weight="normal"
          >
            <li>
              The PC software version EDATALOG is available on a single CD. This
              software is to be loaded on to the computer's hard disk, and it
              allows interfacing of DATALOG to the computer.
            </li>
            <br />
            <li>
              The interfacing with the computer is made either on serial com
              port or on USB port.
            </li>
            <br />
            <li>
              The front panel screen GUI (Graphical User Interface), in general,
              allows the user to configure:
            </li>
            <ol type="a">
              <li>COM port settings</li>
              <li> DATALOG input selection</li>
              <li> Setting of log interval</li>
              <li> Setting of security passwords</li>
              <li>
                Viewing of current data and historical data in the tabular and
                graphical format.
              </li>
            </ol>
            <br />

            <li>
              {" "}
              The data of all channels are stored on the computer's hard disk by
              start date and time, continuously at the rate of programmed log
              interval.
            </li>
            <br />

            <li>
              Print out of the report and graph can be taken for the selected
              channel, with the real date and time.{" "}
            </li>
            <br />

            <li>
              {" "}
              The X and Y coordinates of the graph are automatically adjusted
              based on the process value so that the pattern is visible on the
              center of the screen. This is called auto-scaling which applies to
              all the channel.{" "}
            </li>
            <br />

            <li>
              Customer or user can enter their own desired alphanumeric field,
              such as company name, operator name, channel nomenclature, unit of
              measurement, process name, etc. to customize the software as per
              their requirements while generating the report or graph on-screen
              or on the hard copy.{" "}
            </li>
            <br />

            <li>
              Any other software facility can be customized as per the user's
              requirements.{" "}
            </li>
          </Text>

          <Text color="#F6F6F6" align="left" size={24} pt={128} mb={86}>
            Products with Data Aquisition Software
          </Text>
          <Group position="center" spacing="sm">
            <Grid gutter="sm">
              <Grid.Col span={4}>
                <Box pos="relative" w={1440} h={280}>
                  <Image
                    src={EventBg}
                    height={202}
                    width={82}
                    pos="absolute"
                    top={0}
                    left={114}
                    w="100%"
                    h="100%"
                  />
                  <Image
                    src={Event1}
                    height={164}
                    width={164}
                    pos="absolute"
                    top={20}
                    left={135}
                    w="100%"
                    h="100%"
                  />
                  <Text color="#E4E8ED" size={12} ml={319}>
                    PRC 300
                  </Text>
                  <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                    Ramp Soak PID Temperature Controller
                  </Text>
                  <UnstyledButton>
                    <Group>
                      <Text
                        size="16px"
                        color="white"
                        ml={315}
                        mt={32}
                        weight={400}
                      >
                        View
                      </Text>
                    </Group>
                  </UnstyledButton>
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box pos="relative" w={1200} h={280}>
                  <Image
                    src={EventBg}
                    height={202}
                    width={82}
                    pos="absolute"
                    top={0}
                    left={114}
                    w="100%"
                    h="100%"
                  />
                  <Image
                    src={Event2}
                    height={164}
                    width={164}
                    pos="absolute"
                    top={20}
                    left={135}
                    w="100%"
                    h="100%"
                  />
                  <Text color="#E4E8ED" size={12} ml={319}>
                    PRC 300 2
                  </Text>
                  <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                    Ramp Soak PID Temperature Controller
                  </Text>
                  <UnstyledButton>
                    <Group>
                      <Text
                        size="16px"
                        color="white"
                        ml={315}
                        mt={32}
                        weight={400}
                      >
                        View
                      </Text>
                    </Group>
                  </UnstyledButton>
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box pos="relative" w={1200} h={280}>
                  <Image
                    src={EventBg}
                    height={202}
                    width={82}
                    pos="absolute"
                    top={0}
                    left={114}
                    w="100%"
                    h="100%"
                  />
                  <Image
                    src={Event3}
                    height={164}
                    width={164}
                    pos="absolute"
                    top={20}
                    left={135}
                    w="100%"
                    h="100%"
                  />
                  <Text color="#E4E8ED" size={12} ml={319}>
                    PRC 300 3
                  </Text>
                  <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                    Ramp Soak PID Temperature Controller
                  </Text>
                  <UnstyledButton>
                    <Group>
                      <Text
                        size="16px"
                        color="white"
                        ml={315}
                        mt={32}
                        weight={400}
                      >
                        View
                      </Text>
                    </Group>
                  </UnstyledButton>
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box pos="relative" w={1200} h={280}>
                  <Image
                    src={EventBg}
                    height={202}
                    width={82}
                    pos="absolute"
                    top={0}
                    left={114}
                    w="100%"
                    h="100%"
                  />
                  <Image
                    src={Event4}
                    height={164}
                    width={164}
                    pos="absolute"
                    top={20}
                    left={135}
                    w="100%"
                    h="100%"
                  />
                  <Text color="#E4E8ED" size={12} ml={319}>
                    PRC 300 4
                  </Text>
                  <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                    Ramp Soak PID Temperature Controller
                  </Text>
                  <UnstyledButton>
                    <Group>
                      <Text
                        size="16px"
                        color="white"
                        ml={315}
                        mt={32}
                        weight={400}
                      >
                        View
                      </Text>
                    </Group>
                  </UnstyledButton>
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box pos="relative" w={1200} h={280}>
                  <Image
                    src={EventBg}
                    height={202}
                    width={82}
                    pos="absolute"
                    top={0}
                    left={114}
                    w="100%"
                    h="100%"
                  />
                  <Image
                    src={Event5}
                    height={164}
                    width={164}
                    pos="absolute"
                    top={20}
                    left={135}
                    w="100%"
                    h="100%"
                  />
                  <Text color="#E4E8ED" size={12} ml={319}>
                    PRC 300
                  </Text>
                  <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                    Ramp Soak PID Temperature Controller
                  </Text>
                  <UnstyledButton>
                    <Group>
                      <Text
                        size="16px"
                        color="white"
                        ml={315}
                        mt={32}
                        weight={400}
                      >
                        View
                      </Text>
                    </Group>
                  </UnstyledButton>
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box pos="relative" w={1200} h={280}>
                  <Image
                    src={EventBg}
                    height={202}
                    width={82}
                    pos="absolute"
                    top={0}
                    left={114}
                    w="100%"
                    h="100%"
                  />
                  <Image
                    src={Event6}
                    height={164}
                    width={164}
                    pos="absolute"
                    top={20}
                    left={135}
                    w="100%"
                    h="100%"
                  />
                  <Text color="#E4E8ED" size={12} ml={319}>
                    PRC 300
                  </Text>
                  <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                    Ramp Soak PID Temperature Controller
                  </Text>
                  <UnstyledButton>
                    <Group>
                      <Text
                        size="16px"
                        color="white"
                        ml={315}
                        mt={32}
                        weight={400}
                      >
                        View
                      </Text>
                    </Group>
                  </UnstyledButton>
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box pos="relative" w={1200} h={280}>
                  <Image
                    src={EventBg}
                    height={202}
                    width={82}
                    pos="absolute"
                    top={0}
                    left={114}
                    w="100%"
                    h="100%"
                  />
                  <Image
                    src={Event6}
                    height={164}
                    width={164}
                    pos="absolute"
                    top={20}
                    left={135}
                    w="100%"
                    h="100%"
                  />
                  <Text color="#E4E8ED" size={12} ml={319}>
                    PRC 300
                  </Text>
                  <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                    Ramp Soak PID Temperature Controller
                  </Text>
                  <UnstyledButton>
                    <Group>
                      <Text
                        size="16px"
                        color="white"
                        ml={315}
                        mt={32}
                        weight={400}
                      >
                        View
                      </Text>
                    </Group>
                  </UnstyledButton>
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box pos="relative" w={1200} h={280}>
                  <Image
                    src={EventBg}
                    height={202}
                    width={82}
                    pos="absolute"
                    top={0}
                    left={114}
                    w="100%"
                    h="100%"
                  />
                  <Image
                    src={Event3}
                    height={164}
                    width={164}
                    pos="absolute"
                    top={20}
                    left={135}
                    w="100%"
                    h="100%"
                  />
                  <Text color="#E4E8ED" size={12} ml={319}>
                    PRC 300
                  </Text>
                  <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                    Ramp Soak PID Temperature Controller
                  </Text>
                  <UnstyledButton>
                    <Group>
                      <Text
                        size="16px"
                        color="white"
                        ml={315}
                        mt={32}
                        weight={400}
                      >
                        View
                      </Text>
                    </Group>
                  </UnstyledButton>
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box pos="relative" w={1200} h={280}>
                  <Image
                    src={EventBg}
                    height={202}
                    width={82}
                    pos="absolute"
                    top={0}
                    left={114}
                    w="100%"
                    h="100%"
                  />
                  <Image
                    src={Event1}
                    height={164}
                    width={164}
                    pos="absolute"
                    top={20}
                    left={135}
                    w="100%"
                    h="100%"
                  />
                  <Text color="#E4E8ED" size={12} ml={319}>
                    PRC 300
                  </Text>
                  <Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
                    Ramp Soak PID Temperature Controller
                  </Text>
                  <UnstyledButton>
                    <Group>
                      <Text
                        size="16px"
                        color="white"
                        ml={315}
                        mt={32}
                        weight={400}
                      >
                        View
                      </Text>
                    </Group>
                  </UnstyledButton>
                </Box>
              </Grid.Col>
            </Grid>
          </Group>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/**IOT  Components*/}
      <Paper w={1440} h={4450} withBorder bg={"black"}>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
              Services
            </Text>
            <Divider size="md" my={23} mr={114} ml={114} pb={40} />
          </Box>
        </Group>
        <Container>
          <Text color="#F6F6F6" align="center" size={32} pt={64}>
            IoT (Internet of Things)
          </Text>
          <Text
            color="#E4E8ED"
            align="left"
            size={16}
            pt={34}
            w={1006}
            weight="normal"
          >
            The Internet of Things is a system of interrelated devices that are
            provided with the ability to transfer data over a network without
            requiring human-to-human or human-to-computer interaction.
          </Text>
          <Image src={IOT} width={822} height={456} pt={64} mx={"auto"} />

          <Text color="#F6F6F6" align="left" size={24} pt={128}>
            What we offer?
          </Text>
          <Text
            color="#E4E8ED"
            align="left"
            size={16}
            pt={34}
            w={1006}
            weight={400}
          >
            IoT for Process Monitor, Control and Data Logging
            <List>
              <List.Item
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#E4E8ED",
                  lineHeight: "30px",
                }}
              >
                Introducing Wi-Fi / Ethernet based interfaceable or stand alone
                IoT modules for monitoring, controlling, and Data logging
                industrial processes. Libratherm offers a fully managed back end
                service along with a customizable WebApp available on PC,
                Smartphones, and Tablets.
              </List.Item>
              <List.Item
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#E4E8ED",
                }}
              >
                These modules can capture data from RS-485 enabled hardware or
                various Analog & Digital Sources.
              </List.Item>
            </List>
          </Text>
        </Container>
        <Paper w={1440} h={1014} withBorder bg={"white"} mt={128}>
          <Grid>
            <Grid.Col span={4}>
              <Image src={IOT1} width={437} height={258} pt={128} pl={164} />
            </Grid.Col>
            <Grid.Col span={4}>
              <Image src={IOT1} width={437} height={258} pt={128} pl={185} />
            </Grid.Col>
          </Grid>

          <Text size={24} weight={600} pt={64} pl={217}>
            Description
          </Text>
          <Text size={16} weight={"400"} w={"85%"} pl={217} pt={32}>
            Libratherm offers IoT modules, which allow the user to remotely
            monitor and control the Industrial process directly on the Internet
            via an Ethernet/Wi-Fi network.
            <br />
            LSD-01 can be used to interface any process controller having an
            RS485 MODBUS interface to capture all the process parameters, which
            can be monitored using Customized Web-App on smart devices like
            Computer, Tablet or Mobile Phones. <br />
            LSD-02 can be used to directly connect the Industrial sensors such
            as Pt-100 or T+RH sensor/transmitter generating Voltage or Current
            Signal. The analog process value is then monitored through WebApp on
            the smart devices like Computer, Tablet or Mobile Phones. <br />
            At the user end, Internet connectivity must be available preferably
            over Wi-Fi or over an Ethernet for the functioning of these modules.
          </Text>

          <Text size={24} weight={"600"} pt={64} pl={217}>
            Key Features
          </Text>
          <Text size={16} w={"85%"} pl={217} pt={32}>
            <li>
              Direct Interface to Internet via Wi-Fi / Ethernet. No expensive
              gateways required.
            </li>
            <li>
              Monitor and Control Devices over the Internet in near real time.
            </li>
            <li>
              Easy to Use customizable WebApp available on PC, Smartphone, and
              Tablet for viewing current and historical trends.
            </li>

            <li>SMS and Email alerts for events and fault conditions.</li>
          </Text>
        </Paper>

        <Text size={24} weight={"600"} pt={64} pl={217} color="#F6F6F6">
          IOT App Screen
        </Text>
        <Image src={IOTApp} width={1006} height={484} pt={64} pl={217} />
        <Text
          size={16}
          weight={"400"}
          w={"85%"}
          pl={217}
          pt={64}
          color="#F6F6F6"
        >
          Libratherm offers IoT modules, which allow the user to remotely
          monitor and control the Industrial process directly on the Internet
          via an Ethernet/Wi-Fi network. <br />
          LSD-01 can be used to interface any process controller having an RS485
          MODBUS interface to capture all the process parameters, which can be
          monitored using Customized Web-App on smart devices like Computer,
          Tablet or Mobile Phones. <br />
          LSD-02 can be used to directly connect the Industrial sensors such as
          Pt-100 or T+RH sensor/transmitter generating Voltage or Current
          Signal. The analog process value is then monitored through WebApp on
          the smart devices like Computer, Tablet or Mobile Phones. <br />
          At the user end, Internet connectivity must be available preferably
          over Wi-Fi or over an Ethernet for the functioning of these modules.{" "}
          <br />
        </Text>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Post Weld Heat Treatment Component */}
      <Paper w={1440} h={6097} withBorder bg={"black"}>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
              Services
            </Text>
            <Divider size="md" my={23} mr={114} ml={114} pb={40} />
          </Box>
        </Group>
        <Container>
          <Text color="#F6F6F6" align="center" size={32} pt={64}>
            Post Weld Heat Treatment (PWHT)
          </Text>

          <Text
            color="#E4E8ED"
            align="left"
            size={16}
            pt={34}
            w={1000}
            weight="normal"
          >
            Welding is the process of joining metals or thermoplastics by using
            high heat or pressure and fusing the parent material with weld
            metal. Welding has many applications in industries like automotive,
            shipping, construction, mechanical, and many more. The major
            drawback of welding is the residual stress formed by the rapid
            cooling of the weld material. The sudden shrinking of the joint
            material weakens the equipment, thus impacting the metal's quality
            and structure. For dense materials, these stresses can even exceed
            the specified design stress. <br />
            Post Weld Heat Treatment (PWHT)/Stress Relief helps retain the
            material strength of the part subjected to welding by reducing and
            redistributing the residual stress. PWHT not only reduces residual
            stress but also controls the material's hardness and enhances
            mechanical strength. This treatment can be performed after any
            welding process, but it has a specific meaning for few industries.
            Current design codes such as ASME and BSI Pressure vessels and
            Piping codes specify that PWHT is required to ensure safe and
            desired design with optimum mechanical and metallurgic properties.
          </Text>

          <Image src={PWHT} width={670} height={372} pl={168} pt={64} />
          <Text color="#F6F6F6" align="left" size={24} pt={64}>
            Post Weld Heat Treatment (PWHT)
          </Text>

          <Text
            color="#E4E8ED"
            align="left"
            size={16}
            pt={34}
            w={1000}
            weight="normal"
            mb={128}
          >
            Post Weld Heat Treatment (PWHT) reheats the welded material using a
            controlled ramp-soak profile with a temperature below its initial
            transformation temperature. The temperature ranges from 595˚C to
            775˚C depending upon the properties of the metal/material. The
            heating rate is determined and controlled by the type of material
            thickness. The holding temperature is the one that is high enough to
            relieve stress and reduce hardness, but it is lower than the initial
            transformation temperature. Uneven or quick heating or cooling can
            form cracks in the component. Heating and cooling rate, holding
            temperature, and soak duration must be controlled and monitored
            precisely to avoid any detrimental effects such as reheat cracking,
            distortion, decrease in the toughness, and over softening to obtain
            the full benefit of the process. <br /> <br />
            Libratherm offers Single-Zone and Multi-Zone PID Ramp Soak
            controllers, which precisely controls the PWHT process. They can
            directly accept grounded/ungrounded thermocouples and provide
            analogue/SSR output with PID control action. The user can program
            multiple steps of ramping, soaking, and cooling to achieve a precise
            heating rate. Both controllers can operate independently or in a
            cascade mode (Master-Slave). Optionally MODBUS over RS-485 interface
            is also available for interfacing with SCADA, PLC or data logging
            systems.
          </Text>
        </Container>

        <Paper h={1773} w={1441} withBorder bg={"white"}>
          <Image
            src={PWHT2}
            width={1006}
            height={404}
            alt="pwht"
            pt={128}
            pl={218}
          />
          <Image
            src={PWHT3}
            width={1006}
            height={404}
            alt="pwht3"
            pt={103}
            pl={218}
          />
          <Container>
            <Text align="left" size={24} pt={128} color="#262728">
              Advantages of PWHT
            </Text>
            <Text pt={32}>
              <List>
                <List.Item
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555459",
                  }}
                >
                  PWHT uses a technique that reduces or redistributes the
                  Residual Stress formed by the welding Process by involving
                  4-step processes like Pre-Heating, Heating, Soaking & Cooling
                  the Welded Surface to controlled temperatures for a specified
                  amount of time. This enhances the properties of the welded
                  surface.
                </List.Item>
                <List.Item
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555459",
                  }}
                >
                  Helps to improve the Metallurgical Structure.
                </List.Item>
                <List.Item
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555459",
                  }}
                >
                  Helps to improve the Ductility of the Material.
                </List.Item>
                <List.Item
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555459",
                  }}
                >
                  Reduces the risk of Brittle Fracture as the Ductility
                  increases.
                </List.Item>
                <List.Item
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555459",
                  }}
                >
                  Relaxed Thermal Stress due to the redistribution of Residual
                  Stresses.
                </List.Item>
              </List>
            </Text>
          </Container>
          <Container>
            <Text align="left" size={24} pt={64} color="#262728">
              Safety and Precautions
            </Text>
            <Text pt={32}>
              <List>
                <List.Item
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555459",
                  }}
                >
                  PWHT must be performed by certified experts with experience in
                  this field.
                </List.Item>
                <List.Item
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555459",
                  }}
                >
                  The portion exposed to PWHT must be covered properly to
                  protect it from rain or wind.
                </List.Item>
                <List.Item
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555459",
                  }}
                >
                  A hardness test must be performed to check if Post weld heat
                  treatment is successfully performed.
                </List.Item>
                <List.Item
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555459",
                  }}
                >
                  Some metals and alloys can experience cracks during PWHT.
                  Therefore, the alloy system must be taken into account.
                </List.Item>
                <List.Item
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555459",
                  }}
                >
                  Thermocouples are used for monitoring PWHT to assure heating
                  rates, cooling rates, and hold temperature is within standard
                  specifications. Along with thermocouples computer software is
                  used to provide documentation about PWHT.
                </List.Item>
              </List>
            </Text>
          </Container>
        </Paper>

        <Container>
          <Grid gutter="lg">
            <Col span={6}>
              <Image
                src={Rect3715}
                alt="Vision"
                height={871}
                width={720}
                pos="absolute"
                pl={0}
                left={0}
              />
              <Image
                src={SixZone}
                alt="Vision"
                width={444}
                height={407}
                pos={"absolute"}
                left={134}
                mt={175}
              />
              <Button
                variant="default"
                color="#FFF"
                uppercase
                mt={646}
                left={288}
                radius={0}
                pos={"absolute"}
              >
                visit prc 6000
              </Button>

              <Container>
                <Text
                  size="24px"
                  w={514}
                  h={44}
                  weight={600}
                  mt={999}
                  ml={-200}
                  mb={32}
                  style={{ lineHeight: "51.2px" }}
                  color="#F6F6F6"
                >
                  Ramp/Soak Programmable PID Temperature Controller – PRC-489
                </Text>
                <Text
                  h={110}
                  w={596}
                  color="#E4E8ED"
                  size={16}
                  weight={400}
                  ml={-200}
                  mt={98}
                >
                  Libratherm offers Ramp/Soak Programmable PID Temperature
                  Controller – PRC-489 which is designed to improve reliability,
                  accuracy, and control for all temperature control
                  applications. It features Ramp and Soak functions. The single
                  pattern of a total of 16 (ramp/soak) steps can be programmed
                  and stored in the memory. It can also be used as single set
                  point control when the ramp/soak profile control is not
                  desired. The controllers are calibrated for a K-type
                  thermocouple.
                </Text>

                <Text
                  size="24px"
                  w={514}
                  h={44}
                  weight={600}
                  mt={64}
                  ml={-200}
                  style={{ lineHeight: "51.2px" }}
                  color="#F6F6F6"
                >
                  Features
                </Text>

                <Text
                  h={308}
                  w={552}
                  color="#E4E8ED"
                  size={16}
                  weight={400}
                  ml={-200}
                  mt={22}
                >
                  <List>
                    <List.Item
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#E4E8ED",
                      }}
                    >
                      Accepts standard K type thermocouple
                    </List.Item>
                    <List.Item
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#E4E8ED",
                      }}
                    >
                      Control output of Relay / TRAIC / DC pulse / (4-20)mA/
                      (0-5)Volt.
                    </List.Item>
                    <List.Item
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#E4E8ED",
                      }}
                    >
                      Servo start from the current process temperature.
                    </List.Item>
                    <List.Item
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#E4E8ED",
                      }}
                    >
                      1 to 16 programmable ramp/soak steps with rate programming
                      facility.
                    </List.Item>
                    <List.Item
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#E4E8ED",
                      }}
                    >
                      Master / Slave concept with 1 master and max. 30 slaves.
                    </List.Item>
                    <List.Item
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#E4E8ED",
                      }}
                    >
                      Each controller can be configured as master or slave with
                      1 master and many slaves.
                    </List.Item>
                    <List.Item
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#E4E8ED",
                      }}
                    >
                      Can be used as single set point control with online set
                      point change facility.
                    </List.Item>
                    <List.Item
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#E4E8ED",
                      }}
                    >
                      Auto Tracking feature to ensure same rate of
                      heating/cooling even after power failure / resumption.
                    </List.Item>
                    <List.Item
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#E4E8ED",
                      }}
                    >
                      Deviation hold above and below the set point for assured
                      heating ramp and cooling ramp.
                    </List.Item>
                  </List>
                </Text>
              </Container>
            </Col>
            <Col span={6}>
              <Text
                size="24px"
                w={514}
                h={44}
                weight={600}
                mt={128}
                ml={50}
                style={{ lineHeight: "51.2px" }}
                color="#F6F6F6"
              >
                PWHT Temperature Controller - PRC 6000
              </Text>
              <Text
                h={110}
                w={596}
                color="#E4E8ED"
                size={16}
                weight={400}
                ml={50}
                mt={24}
              >
                Libratherm offers Ramp/Soak Programmable PID Temperature
                Controller – PRC-489 which is designed to improve reliability,
                accuracy, and control for all temperature control applications.
                It features Ramp and Soak functions. The single pattern of a
                total of 16 (ramp/soak) steps can be programmed and stored in
                the memory. It can also be used as single set point control when
                the ramp/soak profile control is not desired. The controllers
                are calibrated for a K-type thermocouple.
              </Text>

              <Text
                size="24px"
                w={514}
                h={44}
                weight={600}
                mt={64}
                ml={50}
                style={{ lineHeight: "51.2px" }}
                color="#F6F6F6"
              >
                Features
              </Text>

              <Text
                h={308}
                w={552}
                color="#E4E8ED"
                size={16}
                weight={400}
                ml={50}
                mt={22}
              >
                <List>
                  <List.Item
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#E4E8ED",
                    }}
                  >
                    Accepts standard K type thermocouple
                  </List.Item>
                  <List.Item
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#E4E8ED",
                    }}
                  >
                    Control output of Relay / TRAIC / DC pulse / (4-20)mA/
                    (0-5)Volt.
                  </List.Item>
                  <List.Item
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#E4E8ED",
                    }}
                  >
                    Servo start from the current process temperature.
                  </List.Item>
                  <List.Item
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#E4E8ED",
                    }}
                  >
                    1 to 16 programmable ramp/soak steps with rate programming
                    facility.
                  </List.Item>
                  <List.Item
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#E4E8ED",
                    }}
                  >
                    Master / Slave concept with 1 master and max. 30 slaves.
                  </List.Item>
                  <List.Item
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#E4E8ED",
                    }}
                  >
                    Each controller can be configured as master or slave with 1
                    master and many slaves.
                  </List.Item>
                  <List.Item
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#E4E8ED",
                    }}
                  >
                    Can be used as single set point control with online set
                    point change facility.
                  </List.Item>
                  <List.Item
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#E4E8ED",
                    }}
                  >
                    Auto Tracking feature to ensure same rate of heating/cooling
                    even after power failure / resumption.
                  </List.Item>
                  <List.Item
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#E4E8ED",
                    }}
                  >
                    Deviation hold above and below the set point for assured
                    heating ramp and cooling ramp.
                  </List.Item>
                </List>
              </Text>

              <Image
                src={Rect3716}
                width={720.5}
                height={1207}
                pt={128}
                ml={-10}
                pos={"absolute"}
              />

              <Image
                src={Img440}
                pos={"absolute"}
                width={449}
                height={449}
                pl={136}
                pt={307}
              />

              <Button
                variant="default"
                color="#FFF"
                uppercase
                mt={802}
                left={1012}
                radius={0}
                pos={"absolute"}
              >
                visit prc 6000
              </Button>
            </Col>
          </Grid>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/** Journal Applications Component*/}
      <Paper w={1440} h={3547} withBorder bg={"black"}>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
              Application
            </Text>
            <Divider size="md" my={23} mr={114} ml={114} pb={40} />
          </Box>
        </Group>
        <Grid>
          <Grid.Col span={4}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={WhiteBG}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                SCR Power Regulators{" "}
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={WhiteBG}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                SCR Triggering Cards for OEM{" "}
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={WhiteBG}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Thyristor Power Switches{" "}
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={WhiteBG}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Phase Angle Control vs Zero Crossover{" "}
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={WhiteBG}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Multizone Heating System{" "}
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={WhiteBG}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Multizone Heating System{" "}
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4} pt={120}>
            <Box pos="relative" w={1200} h={280}>
              <Image
                src={WhiteBG}
                height={327}
                width={358}
                pos="absolute"
                top={64}
                left={116}
              />
              <Text color="#E4E8ED" size={16} ml={530} pt={128}>
                22nd January, 2023.
              </Text>
              <Text color="#F6F6F6" size={32} ml={530} mt={16}>
                Temperature Controller{" "}
              </Text>
              <Text
                color="#E4E8ED"
                size={16}
                ml={530}
                mt={16}
                w={868}
                lineClamp={2}
              >
                Libratherm has supplied various types of temperature
                controllers, thyristor power controllers and control panels to
                the industries manufacturing Files, Diamond Tools, Machine
                Tools, Automobile parts, Hack saw blades, Stone cutting tools
                and circular blades etc… The temperature of the electrical or
                fuel fired heating systems, used for annealing, hardening, steam
                bluing and similar such processes, has been in use for precise
                control up to 1200-C, using our models PRC-300, PRC-309,
                PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with the sensor
                input from thermocouples or infrared non contact sensors.
              </Text>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" ml={530} mt={32} weight={400}>
                    Read more
                  </Text>
                </Group>
              </UnstyledButton>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** SCR POWER Regulators */}

      <Paper w={1440} h={4450} withBorder bg={"black"}>
        <Group noWrap spacing={0}>
          <Box w="100%">
            <Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
              Application
            </Text>
            <Divider size="md" my={23} mr={114} ml={114} pb={40} />
          </Box>
        </Group>
        <Container>
          <Image src={SCR} width={1000} height={422} mx={"auto"} />

          <Text color="#F6F6F6" align="left" size={32} pt={64}>
            SCR Power Regulators
          </Text>
          <Text
            color="#E4E8ED"
            align="left"
            size={16}
            pt={34}
            w={1006}
            weight={400}
          >
            Power Controllers for Precise Voltage and Current Control : SCR
            Power Regulators, also known as Thyristor Power Controllers are
            devices that control power delivery. They are designed to vary the
            AC voltage across resistive and inductive loads. The primary
            controlling device is a back-to-back connected Silicon Rectifier
            (SCR) or Thyristor. They are coupled with the triggering electronics
            from Libratherm which provide gate cathode triggering pulses
            proportional to the control signal. This controls the conduction
            angle of the thyristor which controls the average AC voltage across
            the load. Regulating the AC voltage controls the AC current drawn by
            the load and thereby controls the power delivered to the load.
          </Text>
        </Container>
        <Paper w={1440} h={1612} withBorder bg={"white"} mt={128}>
          <Image
            src={PhaseAngel}
            width={1000}
            height={171}
            mx={"auto"}
            pt={128}
          />

          <Text size={32} weight={600} pt={64} pl={217} color="#262728">
            Why use Thyristor Power Controllers?
          </Text>
          <Text size={16} weight={"400"} w={"85%"} pl={217} pt={32}>
            The Thyristor Power Controller can accurately and consistently
            control the process proportional to the control signal. They provide
            a smooth way of controlling the power delivered to the load. Unlike
            Contactors, thyristors don’t have any electromechanical movement
            which may cause arcing/sparking and carbon formation. They gradually
            deliver power to the load and prevent electrical surges, and
            transients, thereby enhancing the operational life of the load.
            Libratherm offers Thyristor Power Controllers ranging from 10A to
            1000A load. Select models have a built-in current limit and current
            trip feature which safeguards against overload damages. They can be
            paired with Libratherm PID Controllers and Ramp Soak Controllers for
            precise temperature control for various applications.
          </Text>

          <Image src={TPC} width={979} height={409} mx={"auto"} pt={64} />

          <Text size={16} pl={217} pt={64} color="#555459">
            Some of the applications where Libratherm's Power Controllers are
            successfully implemented:
            <li>Aluminium Melting Furnaces</li>
            <li>Holding Furnaces</li>
            <li>Air Handling Units</li>
            <li>Dehumidifiers</li>
            <li>Boilers</li>
            <li>Hot Air Generators and Hot Air Dryers</li>
            <li>
              Very high temperature furnaces built using Silicon Carbide/MoSi2
              heating elements
            </li>
            <li>Microwave dryers</li>
            <li>Multi-zone Drying and Curing Ovens</li>
            <li>Heat Transfer Printing Machines</li>
            <li>
              Food Grains, Paper and Printing Drying Ovens made using Quartz
              tube Medium wave IR and Ceramic coated IR heaters
            </li>
            <li>
              Pet bottles Pre Forms preheating tunnel ovens made using IR
              heaters
            </li>
            <li>
              Plastic Injection moulding requiring multi-zone heating for
              manifold moulds
            </li>
            <li>Plastic Pipes and Sheets extrusion</li>
            <li>Metal sheets welding systems</li>
          </Text>
        </Paper>

        <Group noWrap spacing={0}>
          <Box w="100%">
            <Text size={"32px"} mt={128} ml={114} color="#F6F6F6">
              Related Post
            </Text>
          </Box>
        </Group>

        <Group position="center" spacing="lg">
          <Card h={700} w={391} bg={"black"}>
            <Card.Section>
              <Box pos="relative" w={391} h={450} bg={"black"}>
                <Image
                  src={WhiteBG}
                  height={270}
                  width={391}
                  alt="Client"
                  pos="absolute"
                  top={26}
                  w="100%"
                  h="100%"
                />
                <Text
                  weight={400}
                  h={92}
                  w={347}
                  size={32}
                  pos="absolute"
                  mt={350}
                  color="#F6F6F6"
                >
                  Signal Isolation
                </Text>

                <Text
                  size="16px"
                  weight={400}
                  w={325}
                  h={46}
                  pos="absolute"
                  top={414}
                  color="#E4E8ED"
                  lineClamp={2}
                >
                  Libratherm has supplied various types of temperature
                  controllers, thyristor power controllers and control panels to
                  the industries manufacturing Files, Diamond Tools, Machine
                  Tools, Automobile parts, Hack saw blades, Stone cutting tools
                  and circular blades etc… The temperature of the electrical or
                  fuel fired heating systems, used for annealing, hardening,
                  steam bluing and similar such processes, has been in use for
                  precise control up to 1200-C, using our models PRC-300,
                  PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with
                  the sensor input from thermocouples or infrared non contact
                  sensors.
                </Text>
              </Box>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" mt={32} weight={400}>
                    Know more
                  </Text>
                </Group>
              </UnstyledButton>
            </Card.Section>
          </Card>

          <Card h={700} w={391} bg={"black"}>
            <Card.Section>
              <Box pos="relative" w={391} h={450} bg={"black"}>
                <Image
                  src={WhiteBG}
                  height={270}
                  width={391}
                  alt="Client"
                  pos="absolute"
                  top={26}
                  w="100%"
                  h="100%"
                />
                <Text
                  weight={400}
                  h={92}
                  w={347}
                  size={32}
                  pos="absolute"
                  mt={350}
                  color="#F6F6F6"
                >
                  Signal Isolation
                </Text>

                <Text
                  size="16px"
                  weight={400}
                  w={325}
                  h={46}
                  pos="absolute"
                  top={414}
                  color="#E4E8ED"
                  lineClamp={2}
                >
                  Libratherm has supplied various types of temperature
                  controllers, thyristor power controllers and control panels to
                  the industries manufacturing Files, Diamond Tools, Machine
                  Tools, Automobile parts, Hack saw blades, Stone cutting tools
                  and circular blades etc… The temperature of the electrical or
                  fuel fired heating systems, used for annealing, hardening,
                  steam bluing and similar such processes, has been in use for
                  precise control up to 1200-C, using our models PRC-300,
                  PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with
                  the sensor input from thermocouples or infrared non contact
                  sensors.
                </Text>
              </Box>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" mt={32} weight={400}>
                    Know more
                  </Text>
                </Group>
              </UnstyledButton>
            </Card.Section>
          </Card>

          <Card h={700} w={391} bg={"black"}>
            <Card.Section>
              <Box pos="relative" w={391} h={450} bg={"black"}>
                <Image
                  src={WhiteBG}
                  height={270}
                  width={391}
                  alt="Client"
                  pos="absolute"
                  top={26}
                  w="100%"
                  h="100%"
                />
                <Text
                  weight={400}
                  h={92}
                  w={347}
                  size={32}
                  pos="absolute"
                  mt={350}
                  color="#F6F6F6"
                >
                  Signal Isolation
                </Text>

                <Text
                  size="16px"
                  weight={400}
                  w={325}
                  h={46}
                  pos="absolute"
                  top={414}
                  color="#E4E8ED"
                  lineClamp={2}
                >
                  Libratherm has supplied various types of temperature
                  controllers, thyristor power controllers and control panels to
                  the industries manufacturing Files, Diamond Tools, Machine
                  Tools, Automobile parts, Hack saw blades, Stone cutting tools
                  and circular blades etc… The temperature of the electrical or
                  fuel fired heating systems, used for annealing, hardening,
                  steam bluing and similar such processes, has been in use for
                  precise control up to 1200-C, using our models PRC-300,
                  PRC-309, PID-300, PID-723, DLC-301, POW-3/S and POW-3/D with
                  the sensor input from thermocouples or infrared non contact
                  sensors.
                </Text>
              </Box>
              <UnstyledButton>
                <Group>
                  <Text size="20px" color="white" mt={32} weight={400}>
                    Know more
                  </Text>
                </Group>
              </UnstyledButton>
            </Card.Section>
          </Card>
        </Group>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/** Get in touch component */}
      
      <Paper w={1440} h={2141} withBorder>
        <Container>
          <Text color="#262728" size={16} weight={600} mt={77} align="center">
            LETS CONNECT
          </Text>
          <Text color="#262728" size={32} weight={600} mt={18} align="center">
            Get in touch with us
          </Text>
        </Container>
        <Text color="#555459" w={720} size={16} weight={400} mt={18} ml={337}>
          Libratherm is an innovation-driven manufacturer of Process Control
          Instruments and Systems since 1991. We cater to a wide range of
          industries, by providing accurate measurement, precise control
        </Text>
        <MantineProvider
				theme={{
					colorScheme: "dark",
				}}
			>

        <Paper w={1440} h={1236} withBorder bg={"black"} mt={77}>
          <Group>
            <Stack ml={109} mt={140}>
              <Text size={16} color="#E4E8ED">
                GET IN TOUCH
              </Text>
              <Text size={32} color="#FFF">
                Interested in something?
              </Text>
              <Text size={16} color="#E4E8ED" w={601}>
                Please get in touch below if you have a product enquiry or would
                like to know more information
              </Text>

              <SimpleGrid cols={2} mt={"xl"}>
              <TextInput
										w={288}
										variant="filled"
										styles={{
											input: {
												background: "black",
												borderColor: "#777",
												borderStyle: "solid",
											},
										}}
										label="Name"
										radius={"xs"}
									/>
                <TextInput 
                w={288}
                variant="filled"
                styles={{
                  input: {
                    background: "black",
                    borderColor: "#777",
                    borderStyle: "solid",
                  },
                }}
                label="Company" radius={"xs"} />
              </SimpleGrid>
              <TextInput
              w={596}
              variant="filled"
              styles={{
                input: {
                  background: "black",
                  borderColor: "#777",
                  borderStyle: "solid",
                },
              }}
              label="Email Address" radius={"xs"} />

              <SimpleGrid cols={2}>
                <TextInput 
                w={288}
                variant="filled"
                styles={{
                  input: {
                    background: "black",
                    borderColor: "#777",
                    borderStyle: "solid",
                  },
                }}
                label="Name" radius={"xs"} />
                <TextInput 
                w={288}
                variant="filled"
                styles={{
                  input: {
                    background: "black",
                    borderColor: "#777",
                    borderStyle: "solid",
                  },
                }}
                label="Company" radius={"xs"} />
              </SimpleGrid>
              <Textarea 
              w={596}
              variant="filled"
              styles={{
                input: {
                  background: "black",
                  borderColor: "#777",
                  borderStyle: "solid",
                },
              }}
              label="Message" radius={"xs"} />
              <PrimaryButton w={138}> SEND</PrimaryButton>
            </Stack>
            
            
            <Stack>
              <Box w="100%">
                <Divider size="md" ml={123} mt={180} w={300} />
                <Text size={"32px"} ml={123} mt={6} color="#F6F6F6">
                  Useful Information
                </Text>
                <Text size={"20px"} ml={123} mt={35} color="#F6F6F6">
                  Statutory Details:
                </Text>
                <Text size={"16px"} ml={123} mt={22} color="#E4E8ED">
                  GST No : 27AABCL1732A1Z5
                </Text>
                <Text size={"16px"} ml={123} mt={22} color="#E4E8ED">
                  CIN No : U31909MH2006PTC159638
                </Text>
                <Text size={"20px"} ml={123} mt={35} color="#F6F6F6">
                  Address :
                </Text>
                <Text size={"16px"} ml={123} mt={22} w={488} color="#E4E8ED">
                  401-403, Diamond Industrial Estate, Ketkipada Road, Dahisar
                  (East), Mumbai 400068, Maharashtra, India.
                </Text>
                <Text size={"20px"} ml={123} mt={22} color="#F6F6F6">
                  Contact Us:
                </Text>
                <Text size={"16px"} ml={123} mt={35} color="#E4E8ED">
                  Email: enquiry@libratherm.com, libratherm@libratherm.com
                </Text>
                <Text size={"16px"} ml={123} color="#E4E8ED">
                  Landline: +91-22-42555334
                </Text>
                <Text size={"20px"} ml={123} mt={22} color="#F6F6F6">
                  Mobile:
                </Text>
                <Text size={"16px"} ml={123} mt={22} color="#E4E8ED">
                  Customer Care : +91-8104971152
                </Text>
                <Text size={"16px"} ml={123} color="#E4E8ED">
                  Sales : +91-8104971154
                </Text>
                <Text size={"16px"} ml={123} color="#E4E8ED">
                  Marketing : +91-9082687279
                </Text>
              </Box>
            </Stack>
          </Group>
        </Paper>
      </MantineProvider>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/* Button components */}
      <Paper>
        <Stack align="center">
          <Button color="libra-gray" style={{ textTransform: "uppercase" }}>
            select options
          </Button>
          <OptionsButton>Select Options</OptionsButton>
          <PrimaryButton>add to wishlist</PrimaryButton>
          <SecondaryButton>Apply Now</SecondaryButton>
          <TertiaryButton>View cart</TertiaryButton>
          <br />
          <br />
          <br />
          <br />

          {/* Product card */}
          <Card withBorder>
            <Group>
              <Paper>
                <Image
                  src="https://generation-sessions.s3.amazonaws.com/7626af25d316784c76530b734963d634/img/pow-3-pa-cl-50a-1@2x.png"
                  alt="Product Image"
                  height={284}
                  width={284}
                  fit="cover"
                />
              </Paper>
              <Paper w={400} px="lg">
                <Text
                  weight={600}
                  size={"18px"}
                  style={{ lineHeight: "22.77px", marginBottom: 8 }}
                  color="#414141"
                >
                  Three Phase Thyristor Power Controller
                </Text>
                <Text weight={600} size={"14px"} color="#E83214">
                  POW-3-PA-CL
                </Text>
                <Text
                  top={128}
                  weight={400}
                  size={"12px"}
                  style={{ lineHeight: "19.2px", marginTop: 26 }}
                  color="#555459"
                >
                  <List>
                    <List.Item
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "#555459",
                      }}
                    >
                      Three Phase SCR Power Regulator for Three Phase Heater
                      connected in 3 or 4 Wire Star
                    </List.Item>
                    <List.Item
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "#555459",
                      }}
                    >
                      3 Wire Close or Open Delta Configurations with Current
                      Control/Current Limit and Over Load Protection.
                    </List.Item>
                  </List>
                </Text>
              </Paper>
              <Divider orientation="vertical"></Divider>
              <Paper>
                <Text
                  left={852}
                  weight={400}
                  size={"10px"}
                  style={{ top: 47, letterSpacing: 0, marginRight: 100 }}
                  color="#707070"
                >
                  Prices are inclusive of Delivery Charges.
                </Text>
                <Text
                  weight={400}
                  size={"20px"}
                  style={{ top: 0, marginRight: 112, marginBottom: 8 }}
                  color="#414141"
                >
                  ₹12,600 – ₹14,700
                </Text>
                <div
                  style={{
                    height: "67px",
                    left: 0,
                    top: "63px",
                    width: "296px",
                    paddingTop: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src="https://generation-sessions.s3.amazonaws.com/513e9ffa8e311059b1addd368adeef8e/img/frame-2.svg"
                      height={"18px"}
                      width={"18px"}
                      left={0}
                      top={"3px"}
                      style={{ marginRight: "4px" }}
                    />
                    <Text weight={700} size={"12px"} color="#414141">
                      In Stock
                    </Text>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src="https://generation-sessions.s3.amazonaws.com/513e9ffa8e311059b1addd368adeef8e/img/frame-1.svg"
                      height={"16px"}
                      width={"16px"}
                      style={{ marginRight: "8px" }}
                    />
                    <Text weight={400} size={"12px"} color="#555459">
                      Get 5% Instant Discount Up to ₹1250 On Lea...
                    </Text>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src="https://generation-sessions.s3.amazonaws.com/513e9ffa8e311059b1addd368adeef8e/img/frame-1.svg"
                      height={"16px"}
                      width={"16px"}
                      style={{ marginRight: "8px" }}
                    />
                    <Text weight={400} size={"12px"} color="#555459">
                      Get 10% Instant Discount Up to ₹2250
                    </Text>
                  </div>
                </div>

                <Stack spacing="xs" align="stretch" py={15}>
                  <OptionsButton>Select Options</OptionsButton>
                  <PrimaryButton>Add to Wishlist</PrimaryButton>
                </Stack>
              </Paper>
            </Group>
          </Card>
        </Stack>
      </Paper>
      <br />
      <br />
      <br />

      {/* Text Input components */}
      <TextInput
        placeholder="PRANAY KOTADIA"
        label="Name"
        radius="xs"
        size="md"
        style={{
          width: "288px",
          height: "43px",
          fontWeight: "400",
          color: "#555459",
          fontSize: "16px",
          margin: "auto",
        }}
      />

      <Autocomplete
        label="Country"
        placeholder=""
        data={["India", "USA", "Iran", "France", "Canada", "Antartica"]}
        style={{
          width: "288px",
          height: "43px",
          fontWeight: "400",
          color: "#555459",
          fontSize: "16px",
          margin: " 51px auto",
        }}
      />

      <br />
      <br />
      <br />
      <br />
    </MantineProvider>
  );
}

export default App;
