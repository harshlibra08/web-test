import { BackgroundImage, Divider, Center, Text, Paper, Box, Stack } from "@mantine/core";
import React from "react";
import BGImage from "../Assets/bgimage.png";
type Props = {};

const Excellence = (props: Props) => {
	return (
		<>
			<BackgroundImage src={BGImage} w={1440} h={600} visibleFrom="xs">
				<Stack>
					<Divider size="sm" w={1014} ml={223} mt={152} />
					<Text fz={48} fw={400} mt={67} c={"#f6f6f6"} ta={"center"}>
						Providing Excellence Since 1991
					</Text>

					<Text c={"#f6f6f6"} ml={223} fz={14} fw={400} h={66} w={1014} mt={24} ta={"center"}>
						We offer complete solutions for accurate measurement and control of Humidity, Pressure,
						Flow, Level, pH, Speed, etc. Our products are reliable and excellent in quality and are
						conforming to EN61010 International Safety Standards.
					</Text>

					<Divider size="sm" mt={67} w={1014} ml={223} />
				</Stack>
			</BackgroundImage>

			{/**Mobile view */}

			<BackgroundImage src={BGImage} w={360} h={318} hiddenFrom="xs">
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
			</BackgroundImage>
		</>
	);
};

export default Excellence;
