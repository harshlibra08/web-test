import { Paper, List, Text, Title, Image, UnstyledButton, Grid, Divider } from "@mantine/core";
import { IconChevronsDown } from "@tabler/icons-react";
import React from "react";
import LandingBg from "../Assets/LandingBG.png";

type Props = {};

const Landing = (props: Props) => {
	return (
		<Paper w={1400} h={688}>
			<Divider my="sm" mb={-1} />
			<Grid>
				<Grid.Col span={6}>
					<Title
						style={{
							fontSize: "34px",
							fontWeight: "600",
							lineHeight: "51.2px",
							marginLeft: "114px",
							marginTop: "123px",
							color: "#262728",
						}}
					>
						Partners in <br />
						Measurement & Control
					</Title>
					<Text
						style={{
							fontSize: "14px",
							fontWeight: "400",
							color: "#555459",
							lineHeight: "22.4px",
							marginTop: "26px",
							marginLeft: "114px",
							width: "592px",
						}}
					>
						Libratherm Instruments Pvt. Ltd. is an ISO 9001:2015 Certified Indian Company engaged in
						the manufacturing of Electronic Process Control Instruments and Systems since 1991.
					</Text>

					<List mt={24}>
						<List.Item
							style={{
								width: "566px",
								fontSize: "14px",
								fontWeight: "400",
								color: "#555459",
								lineHeight: "28px",
								marginLeft: "124px",
							}}
						>
							Field Proven Products : Certified Indian Company engaged in the manufacturing of
							Electronic Process Control
						</List.Item>
						<List.Item
							pt={8}
							style={{
								width: "566px",
								fontSize: "14px",
								fontWeight: "400",
								color: "#555459",
								lineHeight: "28px",
								marginLeft: "124px",
							}}
						>
							Latest Technology : Certified Indian Company engaged in the manufacturing of
							Electronic Process Control
						</List.Item>
					</List>

					<UnstyledButton ml={124} mt={37}>
						Get Started {<IconChevronsDown size="14px" color="#1D1D1B" />}
					</UnstyledButton>
				</Grid.Col>
				<Grid.Col span={6}>
					<Image style={{ height: "688px", width: "1209px" }} src={LandingBg} />
				</Grid.Col>
			</Grid>
		</Paper>
	);
};
export default Landing;
