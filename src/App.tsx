import React from "react";
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
} from "@mantine/core";
import BGImage from "./bgimage.png";
import LandingImage from "./Rectangle.png";
import WHO from "./who.png";
import Strength1 from "./strength1.png";
import Strength2 from "./strength2.png";
import Strength3 from "./strength3.png";
import Gradient from "./gradient1.png";
import Specialization from "./specialization.png";
import Worldmap from "./WorldMap.png";
//import FooterBg from "./footerbg.png";
//import FooterGrad from "./footergradient.png";
//import LandingMain from "./landing.svg";

import {
  IconSearch,
  IconUser,
  IconHeart,
  IconShoppingCart,
  IconChevronsDown,
  IconCircleChevronLeft,
  IconCircleChevronRight,
} from "@tabler/icons-react";

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

const PrimaryButton = ({ ...props }) => (
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
      <Paper w={1440} h={688} withBorder>
        <Container>
          <Grid gutter="lg">
            <Col span={6}>
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
                  src={LandingImage}
                  alt="Sample"
                  width={1209}
                  height={688}
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
      <Paper w={1440} h={696} withBorder>
        <Container>
          <Grid gutter="lg">
            <Col span={6}>
              <Text size={14} weight={600} color="#E4E8ED" pt={191}>
                WHO ARE WE?
              </Text>
              <Text
                size="32px"
                w={558}
                h={102}
                weight={600}
                pt={16}
                style={{ lineHeight: "51.2px" }}
              >
                How it all began: The Omega <br />
                moment
              </Text>
              <Text
                h={110}
                w={500}
                color="#555459"
                size={14}
                weight={400}
                pt={26}
                mb={40}
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
              <Paper shadow="xs" mt={126} ml={114}>
                <img src={WHO} alt="Sample" width={493} height={451} />
              </Paper>
            </Col>
          </Grid>
        </Container>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      {/**Our Specialization Component */}
      <Paper w={1440} h={696} withBorder>
        <Container>
          <Grid gutter="lg">
            <Col span={6}>
              <Paper shadow="xs" mt={126} mr={833}>
                <img
                  src={Specialization}
                  alt="Sample"
                  width={493}
                  height={451}
                  style={{ flexShrink: "0" }}
                />
              </Paper>
            </Col>
            <Col span={6}>
              <Text
                size="32px"
                w={596}
                h={44}
                weight={600}
                pt={218}
                ml={104}
                style={{ lineHeight: "51.2px" }}
              >
                Our Specialization
              </Text>
              <Text
                h={176}
                w={606}
                color="#555459"
                size={16}
                weight={400}
                pt={26}
                mb={40}
                ml={104}
                mt={34}
                style={{ lineHeight: "24px" }}
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
