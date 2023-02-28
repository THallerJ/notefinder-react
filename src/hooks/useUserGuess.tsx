import { useEffect, useCallback } from "react";
import useAppSelector from "./useAppSelector";
import useCopyRef from "./useCopyRef";

/**
 * This hook executes functions when user guesses the note. Note that all functions
 * that are passed must be wrapped in a useCallback hook.
 *
 * @param onCorrect - The function that executes when the user guesses the correct note
 * @param onIncorrect - The function that executes when the user guesses the incorrect note
 * @param onCorrectDelay - The function that executes on a delay after the user guesses the correct note
 * @param onIncorrectDelay - The function that executes on a delay after the user guesses the incorrect note
 * @param delay - the delay after which onCorrectDelay and onIncorrectDelay will be executed
 */
type useUserGuessProps = {
	onCorrect?: () => void;
	onIncorrect?: () => void;
	onCorrectDelay?: () => void;
	onIncorrectDelay?: () => void;
	delay?: number;
};

const useUserGuess = ({
	onCorrect,
	onIncorrect,
	onCorrectDelay,
	onIncorrectDelay,
	delay,
}: useUserGuessProps) => {
	const checkAnswerFlag = useAppSelector(
		(state) => state.guitar.checkAnswerFlag
	);
	const isSolved: boolean = useAppSelector((state) => state.guitar.isSolved);
	// We get isSolved as a ref because we don't want to trigger useEffect when isSolved is updated
	const isSolvedRef = useCopyRef<boolean>(isSolved);

	const createTimeout = useCallback(
		(callback: () => void): ReturnType<typeof setTimeout> => {
			return setTimeout(
				() => {
					callback();
				},
				delay ? delay : 300
			);
		},
		[delay]
	);

	useEffect(() => {
		if (isSolvedRef.current && onCorrect) onCorrect();
		if (isSolvedRef.current && onCorrectDelay) {
			const timeout = createTimeout(onCorrectDelay);
			return () => clearTimeout(timeout);
		}
		if (!isSolvedRef.current && onIncorrect) onIncorrect();
		if (!isSolvedRef.current && onIncorrectDelay) {
			const timeout = createTimeout(onIncorrectDelay);
			return () => clearTimeout(timeout);
		}
	}, [
		checkAnswerFlag,
		isSolvedRef,
		createTimeout,
		onCorrect,
		onIncorrect,
		onCorrectDelay,
		onIncorrectDelay,
	]);
};

export default useUserGuess;
