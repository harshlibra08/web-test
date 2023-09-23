import { Paper, Container, Grid, Col, List, Text, Button } from "@mantine/core";
import { IconChevronsDown } from "@tabler/icons-react";
import React from "react";

import LandingMain from "./Assets/landing.svg";

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

type Props = {};

const Landing = (props: Props) => {
	return (
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
							Libratherm Instruments Pvt. Ltd. is an ISO 9001:2015 Certified Indian Company engaged
							in the manufacturing of Electronic Process Control Instruments and Systems since 1991.
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
								Field Proven Products : Certified Indian Company engaged in the manufacturing of
								Electronic Process Control
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
								Latest Technology : Certified Indian Company engaged in the manufacturing of
								Electronic Process Control
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
	);
};
export default Landing;
