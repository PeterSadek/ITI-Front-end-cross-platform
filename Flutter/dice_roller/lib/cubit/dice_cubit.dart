import 'dart:math';
import 'package:flutter_bloc/flutter_bloc.dart';

// State class
class RandomNumberState {
  final int number1;
  final int number2;
  final int sum;

  RandomNumberState(this.number1, this.number2, this.sum);
}

// Cubit class
class DiceCubit extends Cubit<RandomNumberState> {
  DiceCubit() : super(RandomNumberState(1, 1, 2));

  void generateRandomNumbers() {
    final number1 = Random().nextInt(6) + 1;
    final number2 = Random().nextInt(6) + 1;
    final sum = number1 + number2;

    emit(RandomNumberState(number1, number2, sum));
  }
}
