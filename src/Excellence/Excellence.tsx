import { BackgroundImage, Divider, Center, Text, Paper, Box, Stack } from "@mantine/core";
import React from "react";
import BGImage from "../Assets/bgimage.png";
type Props = {};

const Excellence = (props: Props) => {
	return (
		<>
			<BackgroundImage src={BGImage} w={{ base: 360, lg: 1440 }} h={{ base: 318, lg: 600 }} mt={30}>
				<Stack>
					<Divider
						size="xs"
						w={{ base: 327, lg: 1014 }}
						ml={{ base: 16, lg: 223 }}
						mt={{ base: 69, lg: 150 }}
					/>
					<Text
						fz={{ base: 16, lg: 48 }}
						fw={400}
						mt={{ base: 17, lg: 67 }}
						c={"#f6f6f6"}
						ta={"center"}
					>
						Providing Excellence Since 1991
					</Text>

					<Text
						c={"#f6f6f6"}
						ml={{ base: 32, lg: 223 }}
						fz={{ base: 12, lg: 14 }}
						fw={400}
						h={{ base: 114, lg: 66 }}
						w={{ base: 311, lg: 1014 }}
						ta={"center"}
					>
						We offer complete solutions for accurate measurement and control of Humidity, Pressure,
						Flow, Level, pH, Speed, etc. Our products are reliable and excellent in quality and are
						conforming to EN61010 International Safety Standards.
					</Text>

					<Divider
						size="xs"
						w={{ base: 327, lg: 1014 }}
						ml={{ base: 16, lg: 223 }}
						mt={{ base: 7, lg: 67 }}
					/>
				</Stack>
			</BackgroundImage>

			{/**Mobile view */}

			{/* <BackgroundImage src={BGImage} w={360} h={318} hiddenFrom="xs">
				<Stack>
					<Divider size="xs" w={327} mt={69} mx={16} />
					<Text fz={16} fw={400} mt={17} c={"#f6f6f6"} ta={"center"}>
						Providing Excellence Since 1991
					</Text>

					<Text c={"#f6f6f6"} ml={32} fz={12} w={311} mt={16} ta={"center"} ff={"Open Sans"}>
						We offer complete solutions for accurate measurement and control of Humidity, Pressure,
						Flow, Level, pH, Speed, etc. Our products are reliable and excellent in quality and are
						conforming to EN61010 International Safety Standards.
					</Text>

					<Divider size="xs" mt={16} w={327} mx={16} />
				</Stack>
			</BackgroundImage> */}

			{/**Tablet view */}
			{/* 
			<BackgroundImage src={BGImage} w={768} h={460} hiddenFrom="md" visibleFrom="xs">
				<Stack>
					<Divider size="xs" w={588} mt={100} mx={90} />
					<Text fz={32} fw={400} mt={55} c={"#f6f6f6"} ta={"center"}>
						Providing Excellence Since 1991
					</Text>

					<Text c={"#f6f6f6"} px={90} fz={12} w={768} mt={24} ta={"center"} ff={"Open Sans"}>
						We offer complete solutions for accurate measurement and control of Humidity, Pressure,
						Flow, Level, pH, Speed, etc. Our products are reliable and excellent in quality and are
						conforming to EN61010 International Safety Standards.
					</Text>

					<Divider size="xs" mt={55} w={588} mx={90} />
				</Stack>
			</BackgroundImage> */}
		</>
	);
};

export default Excellence;
