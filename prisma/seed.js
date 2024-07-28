import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const data = [
			{ mkpt: "5887", possibility:50 ,name: "Ma Aye Nandar Aung" },
			{ mkpt: "6366", possibility:50 ,name: "Ma Hnin Hnin Ei" },
			{ mkpt: "6400", possibility:50 ,name: "Ma Yamin Ei" },
			{ mkpt: "6425", possibility:50 ,name: "Mg Kyaw Zin latt" },
			{ mkpt: "6651", possibility:50 ,name: "Ma Myo Thiri Kyaw" },
			{ mkpt: "6660", possibility:50 ,name: "Ma Thi Tar Htwe" },
			{ mkpt: "6686", possibility:50 ,name: "Ma Shoon Lae Ko" },
			{ mkpt: "6703", possibility:50 ,name: "Mg Hein Htet Lin" },
			{ mkpt: "6711", possibility:50 ,name: "Ma Khaing Thazin" },
			{ mkpt: "6725", possibility:50 ,name: "Ma Sandar Tin" },
			{ mkpt: "6750", possibility:50 ,name: "Ma Moe Myint Thaw" },
			{ mkpt: "6754", possibility:50 ,name: "Ma Kyi San Win" },
			{ mkpt: "6864", possibility:50 ,name: "Mg Nay Yair Linn" },
			{ mkpt: "6869", possibility:50 ,name: "Ma Hsu Cherry Linn" },
			{ mkpt: "6871", possibility:50 ,name: "Ma Su Myat Hnin" },
			{ mkpt: "6881", possibility:50 ,name: "Ma Hsu Myat Noe" },
			{ mkpt: "6883", possibility:50 ,name: "Ma Nay Chi Hlaing" },
			{ mkpt: "6892", possibility:50 ,name: "Mg Thi Ha Zaw" },
			{ mkpt: "6895", possibility:50 ,name: "Ma Hsu Hsu Htet" },
			{ mkpt: "6898", possibility:10 ,name: "Mg Toe Aung Myin"},
			{ mkpt: "6899", possibility:50 ,name: "Ma Nya Lay Phyu" },
			{ mkpt: "6914", possibility:50 ,name: "Ma Seng Moon Jar" },
			{ mkpt: "6922", possibility:50 ,name: "Ma Thawdar Win Hlaing" },
			{ mkpt: "6924", possibility:10 ,name: "Mg Ye Htet Hein" },
			{ mkpt: "6307", possibility:50 ,name: "Ma Hnin Ei San" },
			{ mkpt: "6354", possibility:50 ,name: "Ma May Thu Thu Soe" },
			{ mkpt: "6374", possibility:50 ,name: "Ma Hsu Lwin Lwin Toe" },
			{ mkpt: "6398", possibility:50 ,name: "Ma Hsu Latt Yadana Aung" },
			{ mkpt: "6735", possibility:50 ,name: "Ma Hnin Nu Lwin" }
		];

	data.forEach(async element => {
		await prisma.item.upsert({
				where: {mkpt: element.mkpt},
				update: {...element},
				create: {...element},
			})
		});
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })