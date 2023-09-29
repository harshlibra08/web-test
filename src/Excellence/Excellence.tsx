import { BackgroundImage, Divider, Center, Text, Paper, Box } from "@mantine/core";
import React from "react";
import BGImage from "../Assets/bgimage.png";
type Props = {};

const Excellence = (props: Props) => {
	return (
		<Paper w={1440}>
			<BackgroundImage src={BGImage} w={1441} h={600}>
				<Divider size="sm" w={1014} ml={223} />
				<Text fz={48} fw={400} mt={217} ml={375} style={{ color: "#F6F6F6" }}>
					Providing Excellence Since 1991
				</Text>

				<Center>
					<Text
						color="#F6F6F6"
						size="14px"
						fw={400}
						h={66}
						w={1014}
						mt={24}
						style={{ lineHeight: "22.4px" }}
						ta="center"
					>
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
