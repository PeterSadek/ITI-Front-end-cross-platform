import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final PageController _pageController = PageController(initialPage: 0);
  int _index = 0;

  @override
  void dispose() {
    super.dispose();
    _pageController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'paycell',
          style: TextStyle(
              color: Color(0xff4292ad),
              fontStyle: FontStyle.italic,
              fontWeight: FontWeight.w900),
        ),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Center(
          child: Column(
            children: [
              const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      CircleAvatar(
                        radius: 12,
                        backgroundImage: NetworkImage(
                            'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
                      ),
                      SizedBox(width: 5),
                      Text(
                        'Stefan Stefancik!',
                        style: TextStyle(fontWeight: FontWeight.w600),
                      ),
                    ],
                  ),
                  Badge(
                    backgroundColor: Colors.yellow,
                    label: Text(
                      '7',
                      style: TextStyle(color: Colors.black),
                    ),
                    child: Icon(Icons.notifications_none_outlined),
                  )
                ],
              ),
              const SizedBox(
                height: 10,
              ),
              SizedBox(
                child: Row(
                  children: [
                    Expanded(
                        child: Container(
                      height: 106,
                      decoration: BoxDecoration(
                          color: const Color(0xff024d9e),
                          borderRadius: BorderRadius.circular(10)),
                      child: Padding(
                        padding: const EdgeInsets.all(12),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            const Text(
                              'Current balance',
                              style:
                                  TextStyle(color: Colors.white, fontSize: 15),
                            ),
                            const Text(
                              '8000 EGP',
                              style:
                                  TextStyle(color: Colors.white, fontSize: 15),
                            ),
                            ElevatedButton.icon(
                              onPressed: () {},
                              icon: const Icon(
                                Icons.money,
                                color: Color(0xff024d9e),
                              ),
                              label: const Text(
                                'Send money',
                                style: TextStyle(color: Color(0xff024d9e)),
                              ),
                              style: ElevatedButton.styleFrom(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 16.0, vertical: 12.0),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(12),
                                ),
                              ),
                            )
                          ],
                        ),
                      ),
                    )),
                    const SizedBox(
                      width: 10,
                    ),
                    Expanded(
                        child: Container(
                      height: 106,
                      decoration: BoxDecoration(
                          color: const Color(0xff7763f8),
                          borderRadius: BorderRadius.circular(10)),
                      child: Padding(
                        padding: const EdgeInsets.all(12),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            const Text(
                              'My points',
                              style:
                                  TextStyle(color: Colors.white, fontSize: 15),
                            ),
                            const Text(
                              '766',
                              style:
                                  TextStyle(color: Colors.white, fontSize: 15),
                            ),
                            ElevatedButton.icon(
                              onPressed: () {},
                              icon: const Icon(
                                Icons.redeem,
                                color: Color(0xff7763f8),
                              ),
                              label: const Text(
                                'Redeem',
                                style: TextStyle(color: Color(0xff7763f8)),
                              ),
                              style: ElevatedButton.styleFrom(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 16.0, vertical: 12.0),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(12),
                                ),
                              ),
                            )
                          ],
                        ),
                      ),
                    )),
                  ],
                ),
              ),
              const SizedBox(height: 15),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Services',
                    style: TextStyle(
                        color: Colors.grey, fontWeight: FontWeight.w600),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  Row(
                    children: [
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            padding: const EdgeInsets.all(10.0),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20.0),
                            ),
                          ),
                          child: const Column(
                            children: [
                              Icon(
                                Icons.mobile_friendly_outlined,
                                color: Colors.black,
                              ),
                              SizedBox(
                                height: 10,
                              ),
                              Text(
                                'Mobile recharge',
                                textAlign: TextAlign.center,
                                style: TextStyle(color: Colors.grey),
                              )
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 10,
                      ),
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            padding: const EdgeInsets.all(10.0),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20.0),
                            ),
                          ),
                          child: const Column(
                            children: [
                              Icon(
                                Icons.phone,
                                color: Colors.black,
                              ),
                              SizedBox(
                                height: 10,
                              ),
                              Text(
                                'Landline recharge',
                                textAlign: TextAlign.center,
                                style: TextStyle(color: Colors.grey),
                              )
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 10,
                      ),
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            padding: const EdgeInsets.all(10.0),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20.0),
                            ),
                          ),
                          child: const Column(
                            children: [
                              Icon(
                                Icons.money_outlined,
                                color: Colors.black,
                              ),
                              SizedBox(
                                height: 10,
                              ),
                              Text(
                                'Finance & Banks',
                                textAlign: TextAlign.center,
                                style: TextStyle(color: Colors.grey),
                              )
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 10,
                      ),
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            padding: const EdgeInsets.all(10.0),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20.0),
                            ),
                          ),
                          child: const Column(
                            children: [
                              Icon(
                                Icons.water_drop_outlined,
                                color: Colors.black,
                              ),
                              SizedBox(
                                height: 10,
                              ),
                              Text(
                                'Water bill payment',
                                textAlign: TextAlign.center,
                                style: TextStyle(color: Colors.grey),
                              )
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 10,
                      ),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 10),
              SizedBox(
                height: 150,
                child: Column(
                  children: [
                    Expanded(
                      child: PageView(
                        controller: _pageController,
                        onPageChanged: (value) {
                          setState(() {
                            _index = value;
                          });
                        },
                        children: [
                          Container(
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10),
                                color: const Color(0xfffaad5d)),
                            child: Padding(
                              padding: const EdgeInsets.all(20.0),
                              child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  const Text(
                                    '''Never miss a due payment
and keep track of your installments''',
                                    style:
                                        TextStyle(fontWeight: FontWeight.w600),
                                  ),
                                  Image.network(
                                      'https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg')
                                ],
                              ),
                            ),
                          ),
                          Container(
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10),
                                color: const Color(0xfffaad5d)),
                            child: const Center(child: Text("Page 2")),
                          ),
                          Container(
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10),
                                color: const Color(0xfffaad5d)),
                            child: const Center(child: Text("Page 3")),
                          ),
                          Container(
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10),
                                color: const Color(0xfffaad5d)),
                            child: const Center(child: Text("Page 4")),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: List.generate(
                        4,
                        (index) => Container(
                          margin: const EdgeInsets.symmetric(horizontal: 5),
                          width: _index == index ? 8 : 8,
                          height: 8,
                          decoration: BoxDecoration(
                            color: _index == index ? Colors.black : Colors.grey,
                            borderRadius: BorderRadius.circular(4),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(
                height: 10,
              ),
              const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text('Timberland'),
                  Text(
                    'Discount offer',
                    style: TextStyle(color: Color(0xff51acc7)),
                  )
                ],
              ),
              const SizedBox(
                height: 30,
              ),
              Stack(
                children: [
                  Container(
                      child: const Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('Savings this month'),
                      Text(
                        "300 EGP",
                        style: TextStyle(color: Colors.green),
                      )
                    ],
                  )),
                  Positioned(
                      child: Container(
                    height: 55,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(30),
                        color: const Color(0xff51acc7).withOpacity(0.8)),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            iconColor: Colors.white,
                            backgroundColor: Colors.transparent,
                            elevation: 0,
                          ),
                          child: const Icon(
                            Icons.home_outlined,
                            size: 40,
                          ),
                        ),
                        ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            iconColor: Colors.white,
                            backgroundColor: Colors.transparent,
                            elevation: 0,
                          ),
                          child: const Icon(
                            Icons.file_copy_outlined,
                            size: 40,
                          ),
                        ),
                        ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            iconColor: Colors.white,
                            backgroundColor: Colors.transparent,
                            elevation: 0,
                          ),
                          child: const Icon(
                            Icons.qr_code_2_outlined,
                            size: 40,
                          ),
                        ),
                        ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            iconColor: Colors.white,
                            backgroundColor: Colors.transparent,
                            elevation: 0,
                          ),
                          child: const Icon(
                            Icons.money_outlined,
                            size: 40,
                          ),
                        ),
                        ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            iconColor: Colors.white,
                            backgroundColor: Colors.transparent,
                            elevation: 0,
                          ),
                          child: const Icon(
                            Icons.person_2_outlined,
                            size: 40,
                          ),
                        )
                      ],
                    ),
                  ))
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
