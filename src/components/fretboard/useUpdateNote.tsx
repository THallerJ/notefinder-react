import { select } from 'd3';
import { useEffect, useCallback } from 'react';
import useGetNoteCoordinates from './useGetNoteCoordinates';

const useUpdateNote = () => {
  const drawnNoteId = 'drawnNote';
  const [cx, cy] = useGetNoteCoordinates();

  const drawNote = useCallback((x: number, y: number): void => {
    select('#fretboardSvg')
      .append('g')
      .attr('transform', 'rotate(179,196.84328,192.51967)')
      .append('circle')
      .attr('id', drawnNoteId)
      .attr('r', 1.25)
      .attr('cx', x)
      .attr('cy', y)
      .attr('fill', 'cyan');
  }, []);

  const update = useCallback(
    (x: number, y: number): void => {
      const elem = select(`#${drawnNoteId}`);

      if (!elem.empty()) {
        elem.attr('cx', x).attr('cy', y);
      } else {
        drawNote(x, y);
      }
    },
    [drawNote]
  );

  useEffect(() => {
    update(cx, cy);
  }, [cx, cy, update]);
};

export default useUpdateNote;
