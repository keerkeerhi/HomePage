<p>
    <?
        class apple {
            public $color;
            function setColor($p)
            {
                $this->color=$p;
            }
        }

        $abc='world!';
        $ap = new apple();
        $ap->setColor('red');
//        printf('hello %s',$ap->color);
        echo 'hello   '.$abc.$ap->color;
    ?>
</p>