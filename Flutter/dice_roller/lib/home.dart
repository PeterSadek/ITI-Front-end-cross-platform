import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_day5_task/cubit/dice_cubit.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.green,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text('Click to roll'),
              const SizedBox(
                height: 20,
              ),
              BlocBuilder<DiceCubit, RandomNumberState>(
                  builder: (context, state) {
                return Text('Sum is: ${state.sum}');
              }),
              const SizedBox(
                height: 50,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  BlocBuilder<DiceCubit, RandomNumberState>(
                      builder: (context, state) {
                    return SvgPicture.asset(
                      'assets/images/d${state.number1}.svg',
                      width: 150,
                    );
                  }),
                  BlocBuilder<DiceCubit, RandomNumberState>(
                      builder: (context, state) {
                    return SvgPicture.asset(
                      'assets/images/d${state.number2}.svg',
                      width: 150,
                    );
                  }),
                ],
              ),
              const SizedBox(
                height: 60,
              ),
              ElevatedButton(
                  onPressed: () =>
                      context.read<DiceCubit>().generateRandomNumbers(),
                  child: const Text('Roll'))
            ],
          ),
        ),
      ),
    );
  }
}
