$(document).ready(function () {

        var boxes;
        var arrow_next;
        var box_next = 0;
        var arrow_prev;
        var box_index = 0


        function init() {
            carousel_container = $('#carousel-container');
            boxes = $('.box');
            //arrow_next = $('#right-button');
            arrow_prev = $('#left-button');
           // arrow_next.click(slideNext);
            arrow_prev.click(slidePrev);
            $('#right-button').click(slideNext);
            
   
        }
       $(document).ready(init);

        function slideNext() {
            console.log('slideNext');
            //Animate the current box
            $(boxes[box_index]).animate({
                    left: '-1000px'
                },
                500,
                function () {
                    $(this).css('left', '1000px');
                });

            box_index++;
            if (box_index === boxes.length) {
                box_index = 0;
            }
            $(boxes[box_index]).animate({
                    left: '0px'
                },
                500,
                function () {
                    //alert('Animation done');
                }
            );
        }
        //
        function previousBoxIndex() {
            if (box_index - 1 < 0) {
                return boxes.length - 1;
            }

            return box_index - 1;
        }

        function slidePrev() {
             console.log('slidePrev');
            // Animate the current box
            $(boxes[previousBoxIndex()]).css("left", "-1000px");

            $(boxes[box_index]).animate({
                    left: '1000px'
                },
                500,
                function () {
                    // $(this).css('left', '1020px');//happens when done
                }
            );

            box_index = previousBoxIndex();

            // Animate the next box
            $(boxes[box_index]).animate({
                    left: '0px'
                },
                500,
                function () {
                    //alert('Animation done');
                }
            );
        }
    


});
