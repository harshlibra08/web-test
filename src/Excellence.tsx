import { Paper, BackgroundImage, Divider, Center, Text } from "@mantine/core";
import React from "react";
import BGImage from "./Assets/bgimage.png";
type Props = {};

const Excellence = (props: Props) => {
	return (
		<Paper w={1441} h={600} withBorder>
			<BackgroundImage src={BGImage} h={600} w={1441} pos="absolute">
				<Divider size="sm" mt={150} mb={67} w={1014} ml={223} />
				<Center p="md">
					<Text color="#F6F6F6" size="48px" weight={400}>
						Providing Excellence Since 1991
					</Text>
				</Center>

				<Center>
					<Text color="#F6F6F6" size="14px" weight={400} h={66} w={1014} align="center">
						We offer complete solutions for accurate measurement and control of Humidity, Pressure,
						Flow, Level, pH, Speed, etc. Our products are reliable and excellent in quality and are
						conforming to EN61010 International Safety Standards.
					</Text>
				</Center>
				<Divider size="sm" mt={67} w={1014} ml={223} />
			</BackgroundImage>
		</Paper>
	);
};

export default Excellence;
