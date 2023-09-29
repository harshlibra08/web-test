import {
	Card,
	Text,
	Image,
	Grid,
	rem,
	Group,
	UnstyledButton,
	Paper,
	Box,
	Divider,
} from "@mantine/core";
import React from "react";

const Products = () => {
	return (
		<Paper mt={40} w={1440}>
			<Group wrap="nowrap" gap={0}>
				<Box w={1270}>
					<Divider
						size="sm"
						my={"60px"}
						mr={"17px"}
						label={
							<Text fw={600} fz={32} ml={114} style={{ color: "#262728", lineHeight: "40px" }}>
								Our Products
							</Text>
						}
						labelPosition="left"
					/>
				</Box>

				{<UnstyledButton ml={0}>View All</UnstyledButton>}
			</Group>
			<Grid px={114} mt={30} justify="center" align="flex-start">
				<Grid.Col span={3} style={{ minHeight: rem(80) }}>
					<Card withBorder>
						<Card.Section p={12.57}>
							<Text fz={14} fw={600} style={{ color: "#555459" }}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/image-273-3@2x.png" />
						</Card.Section>

						<Text px={59} style={{ color: "#414141" }}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={3} style={{ minHeight: rem(80) }}>
					<Card withBorder>
						<Card.Section p={12.57}>
							<Text fz={14} fw={600} style={{ color: "#555459" }}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/image-273-3@2x.png" />
						</Card.Section>

						<Text px={59} style={{ color: "#414141" }}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col
					// className={classes.grid1}
					span={3}
					style={{ minHeight: rem(80) }}
				>
					<Card
						// className={classes.card3}
						withBorder
					>
						<Card.Section p={12.57}>
							<Text fz={14} fw={600} style={{ color: "#555459" }}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image
								// className={classes.cardimage}
								src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/image-273-3@2x.png"
							/>
						</Card.Section>

						<Text px={59} style={{ color: "#414141" }}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col
					// className={classes.grid1}
					span={3}
					style={{ minHeight: rem(80) }}
				>
					<Card
						// className={classes.card4}
						withBorder
					>
						<Card.Section p={12.57}>
							<Text fz={14} fw={600} style={{ color: "#555459" }}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image
								// className={classes.cardimage}
								src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/image-273-3@2x.png"
							/>
						</Card.Section>

						<Text px={59} style={{ color: "#414141" }}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default Products;
