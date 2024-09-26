import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

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
      body: SafeArea(
          child: PageView(
        onPageChanged: (value) {
          setState(() {
            _index = value;
          });
        },
        controller: _pageController,
        children: [
          Container(
              child: Column(
            children: [
              SvgPicture.asset(
                "assets/images/Frame.svg",
                width: 327,
                height: 318,
              ),
              const SizedBox(height: 30),
              const Text(
                'Listen Anywhere',
                style: TextStyle(fontSize: 31, fontWeight: FontWeight.w900),
              ),
              const SizedBox(height: 30),
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 30),
                child: Text(
                  '''Favorite tunes follow, anytime, anywhere.
Worry-free offline playback for your journey.''',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w400,
                      color: Color(0xff949494)),
                ),
              )
            ],
          )),
          Container(
              child: Column(
            children: [
              SvgPicture.asset(
                "assets/images/Frame2.svg",
                width: 327,
                height: 318,
              ),
              const SizedBox(height: 30),
              const Text(
                'Playback',
                style: TextStyle(fontSize: 31, fontWeight: FontWeight.w900),
              ),
              const SizedBox(height: 30),
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 30),
                child: Text(
                  '''Pristine sound quality for absolute
clarity in audio playback.''',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w400,
                      color: Color(0xff949494)),
                ),
              )
            ],
          )),
          Container(
              child: Column(
            children: [
              SvgPicture.asset(
                "assets/images/Frame3.svg",
                width: 327,
                height: 318,
              ),
              const SizedBox(height: 30),
              const Text(
                'Listen Anywhere',
                style: TextStyle(fontSize: 31, fontWeight: FontWeight.w900),
              ),
              const SizedBox(height: 30),
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 30),
                child: Text(
                  '''Curated weekly playlists tailored to
your music listening history.''',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w400,
                      color: Color(0xff949494)),
                ),
              )
            ],
          ))
        ],
      )),
      floatingActionButton: Align(
        alignment: Alignment.bottomCenter,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 10),
          child: SizedBox(
            width: 305,
            height: 58,
            child: FloatingActionButton(
              onPressed: () {
                if (_index < 2) {
                  _index++;
                  _pageController.jumpToPage(_index);
                } else {
                  _index = 0;
                  _pageController.jumpToPage(_index);
                }
              },
              backgroundColor: const Color(0xff92E3A9),
              child: const Text(
                'Continue',
                style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 1),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
