@if($messages)
    <div class="alert alert-error alert-message">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>

        {!! $messages !!}
    </div>
@endif
@parent