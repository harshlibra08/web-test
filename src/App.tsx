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

import {
  IconSearch,
  IconUser,
  IconHeart,
  IconShoppingCart,
  IconChevronsDown,
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
      <Header height={56} className={classes.header} >
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
          {/* Add the clickable icons and the export options button */}
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
              <Text size="32px" w={374} h={102} weight={600} mb={26} mt={123}
                style={{lineHeight:"51.2px"}}
              >
                Partners in <br /> Measurement & Control
              </Text>
              <Text h={44} w={592} color="#555459" size={14} weight={400}
                 style={{lineHeight:"22.4px"}}
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
                        lineHeight:"28px",
                        
                      }}
                    >
                      Field Proven Products : Certified Indian Company engaged in the manufacturing of Electronic Process Control
                    </List.Item>
                    <List.Item pt={8}
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#555459",
                        lineHeight:"28px",
                        marginBottom:"37px"

                      }}
                    >
                     Latest Technology : Certified Indian Company engaged in the manufacturing of Electronic Process Control
                    </List.Item>
                  </List>
            <SecondaryButton>Get Started {<IconChevronsDown size="20px"  color="#1D1D1B" />} </SecondaryButton>
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
    </MantineProvider>
  );
}

export default App;
